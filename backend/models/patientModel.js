const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Please include your name.'] },
    email: { type: String, required: [true, 'Please include your email.'] },
    password: { type: String, required: [true, 'Please include your password.'] }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Patient', patientSchema)