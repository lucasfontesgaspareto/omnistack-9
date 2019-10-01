const mongoose = require('mongoose')
const { getModelName } = require('./../helpers')

const modelName = getModelName(__filename)

const Schema = new mongoose.Schema({
  date: Date,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
})

module.exports = mongoose.model(modelName, Schema)
