require("dotenv").config()
const formatPhoneNumber = require("./utils/formatPhone")
var Airtable = require("airtable")
const { AIRTABLE_API_KEY } = process.env
const { AIRTABLE_BASE_ID } = process.env

const at_base = new Airtable({
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_ID)
const at_table_students = at_base("20-21 Students")
const at_table_costumes = at_base("Costumes")

exports.handler = async (event, context, callback) => {
  const phone = formatPhoneNumber(event.queryStringParameters.phone)

  const students = await at_table_students
    .select({
      maxRecords: 3,
      view: "Grid view",
      filterByFormula: `({Cell Phone}='${phone}')`,
    })
    .firstPage()

  const allCostumes = await at_table_costumes
    .select({
      maxRecords: 50,
      view: "Grid view",
    })
    .firstPage()

  const studentsDetails = []

  students.forEach(function (record) {
    if (record.fields.Costumes) {
      const allDatacostumes = allCostumes.filter(costume =>
        record.fields.Costumes.includes(costume.id)
      )

      const costumes = allDatacostumes.map(costume => {
        return {
          id: costume.id,
          images:
            costume.fields["Costume Picture"] ||
            "https://via.placeholder.com/820x412.png",
          price: costume.fields.Price || null,
          class: costume.fields["Assigned Style"],
          hair: costume.fields.Hair,
          makeup: costume.fields.Makeup,
          shoes: costume.fields.Shoes,
          tights: costume.fields.Tights,
          earrings: costume.fields.Earrings,
          others: costume.fields.Others,
        }
      })

      studentsDetails.push({
        id: record.id,
        ascId: record.fields["Phone and Student First Name"],
        name: `${record.fields["Student First Name"]} ${record.fields["Student Last Name"]}`,
        email: record.fields.Email,
        language: record.fields.Language,
        parentF: record.fields["Parent First Name"],
        parentL: record.fields["Parent Last Name"],
        phone: record.fields["Cell Phone"],
        costumes,
      })
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      student: studentsDetails,
    }),
  }
}
