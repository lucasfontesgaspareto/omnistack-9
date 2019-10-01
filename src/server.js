const express = require('express')
const routes = require('./routes')
const db = require('./db')

db.then(payload => {
  console.log('database connected')
}).catch(error => {
  console.log(error)
})

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000)
