const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  payments: [{ type: mongoose.Schema.ObjectId, ref: 'Payment' }]
})

module.exports = mongoose.model('User', UserSchema)
