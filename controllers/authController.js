const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const config = require('../config')

const User = mongoose.model('User')

exports.signin = async (req, res) => {
  const { username, password } = req.body
  const existingUser = await User.findOne({ username })

  // if no user, then sign up
  if (!existingUser) {
    await new User({ username, password }).save()
    const token = jwt.sign({ username }, config.jwtSecret, { expiresIn: '1d' })
    return res.status(200).send({ token })
  }

  // if there is a user, then log in
  existingUser.comparePassword(password, (err, isMatch) => {
    if (err) {
      return res.status(400).send({ status: `error: ${err}` })
    }

    if (!isMatch) {
      return res.status(401).send({ status: 'wrong password' })
    }

    const token = jwt.sign({ username }, config.jwtSecret, { expiresIn: '1d' })
    return res.status(200).send({ token })
  })
}
