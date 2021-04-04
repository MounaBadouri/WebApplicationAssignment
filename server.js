const express = require('express')
const app = express()

const port = process.env.PORT || 8080
const http = require('http').createServer(app)


app.use(express.static('3-WAA-Moviequizz'))



http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
