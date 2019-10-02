const express = require('express')
const routes = require('./routes')
const db = require('./db')

db.catch(console.log)

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000)
