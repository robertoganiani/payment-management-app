const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Payment', PaymentSchema)
