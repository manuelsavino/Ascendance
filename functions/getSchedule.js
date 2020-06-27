const fetch = require("node-fetch")
require("dotenv").config()

exports.handler = async (event, context, callback) => {
  const res = await fetch(
    `https://api.airtable.com/v0/appsgmvdBE37Yxn1U/Table%201?api_key=${process.env.AIRTABLEAPIKEY}&sort%5B0%5D%5Bfield%5D=Day&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=Time&sort%5B1%5D%5Bdirection%5D=asc`
  )
  const data = await res.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
