const handler = async () => {



  return {
    statusCode: 200,
    headers: { "Content-Type": " test/plain" },
    body: "paul".toUpperCase
  }

}

module.exports = { handler }