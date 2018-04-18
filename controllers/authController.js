const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signin = (req, res) => {
  res.status(200).send({ hello: 'signin' })
}
