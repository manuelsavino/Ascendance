const fetch = require("node-fetch")
require("dotenv").config()

exports.handler = async (event, context, callback) => {
  const res = await fetch(
    `https://api.airtable.com/v0/appsgmvdBE37Yxn1U/FAQ?api_key=${process.env.AIRTABLEAPIKEY}`
  )
  const data = await res.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
