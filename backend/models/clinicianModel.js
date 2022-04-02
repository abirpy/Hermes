const mongoose = require('mongoose')


const clinicianSchema = new mongoose.Schema(
  {
    name: { type: String, required: True },
    email: { type: String, required: True },
    password: { type: String, required: True },
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient'}]
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Patient', clinicianSchema)