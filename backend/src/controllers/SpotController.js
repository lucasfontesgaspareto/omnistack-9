const Spot = require('./../models/Spot')
const User = require('./../models/User')

module.exports = {
  async store(req, res) {
    const { filename } = req.file
    const { company, price, techs } = req.body
    const { user_id } = req.headers

    const user = await User.findById(user_id)

    if (!user) {
      return res.status(400).json({
        error: 'i18n.errors.userNotFound'
      })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: String(techs).split(',').map(tech => tech.trim()),
      price
    })

    return res.send(spot)
  },
  async index(req, res) {
    const { tech } = req.query

    const spots = await Spot.find({ techs: tech })

    return res.json(spots)
  }
}
