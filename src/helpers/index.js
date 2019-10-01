const path = require('path')

module.exports = {
  getModelName(filename) {
    const ext = path.extname(filename)
    return path.basename(filename, ext)
  }
}
