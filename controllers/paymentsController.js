const mongoose = require('mongoose')

const User = mongoose.model('User')
const Payment = mongoose.model('Payment')

exports.getUserPayments = async (req, res) => {
  const { username } = req.params
  const user = await User.findOne({ username })
  return res.status(200).send({ payments: user.payments })
}

exports.addPayment = async (req, res) => {
  const { username, payment } = req.body
  const paymentData = new Payment(payment)
  const user = await User.findOne({ username })
  user.payments.push(paymentData)
  await user.save()

  return res.status(200).send({ paymentData })
}
