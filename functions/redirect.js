exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: "https://manuels.dev",
    },
  }

  return callback(null, response)
}
