const mongoose = require('mongoose')
const { getModelName } = require('./../helpers')

const modelName = getModelName(__filename)

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  active: Boolean,
  password: String
})

module.exports = mongoose.model(modelName, Schema)
