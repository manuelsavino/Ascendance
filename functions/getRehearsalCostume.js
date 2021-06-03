require("dotenv").config()
const formatPhoneNumber = require("./utils/formatPhone")
var Airtable = require("airtable")
const { AIRTABLE_API_KEY } = process.env
const { AIRTABLE_BASE_ID } = process.env

const at_base = new Airtable({
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_ID)
const at_table_students = at_base("Recital_line_up_1st_costume")

exports.handler = async (event, context, callback) => {
  const phone = formatPhoneNumber(event.queryStringParameters.phone)

  const students = await at_table_students
    .select({
      maxRecords: 6,
      view: "Recital Website",
      filterByFormula: `({phone_number}='${phone}')`,
    })
    .firstPage()

  console.log(students)

  const studentsDetails = []

  students.forEach(function (record) {
    studentsDetails.push({
      id: record.id,
      name: record.fields["full_name"],
      pictureLink: record.fields.pictures_link[0],
      time: record.fields.rehearsal_time[0],
      show: record.fields.Show[0],
      pictures: record.fields.costume_picture,
    })
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      student: studentsDetails,
    }),
  }
}
