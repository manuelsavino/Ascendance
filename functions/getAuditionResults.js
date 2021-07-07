require("dotenv").config()
const formatPhoneNumber = require("./utils/formatPhone")
var Airtable = require("airtable")
const { AIRTABLE_API_KEY } = process.env
const { AIRTABLE_BASE_ID_AUD } = process.env

const at_base = new Airtable({
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_ID_AUD)
const at_table_auditions = at_base("website-live")

exports.handler = async (event, context, callback) => {
  const phone = formatPhoneNumber(event.queryStringParameters.phone)
  const { audNum } = event.queryStringParameters

  const students = await at_table_auditions
    .select({
      maxRecords: 3,
      view: "Grid view",
      filterByFormula: `AND(({Phone}='${phone}'),({Audition Number}='${audNum}'))`,
    })
    .firstPage()

  return {
    statusCode: 200,
    body: JSON.stringify({
      student: students,
    }),
  }
}
