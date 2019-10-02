const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://admin:NKyj66KyGSXnYZ@ds329058.mlab.com:29058/omnistack9', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = db
