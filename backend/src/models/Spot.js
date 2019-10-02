const mongoose = require('mongoose')
const { getModelName } = require('./../helpers')

const modelName = getModelName(__filename)

const Schema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model(modelName, Schema)
