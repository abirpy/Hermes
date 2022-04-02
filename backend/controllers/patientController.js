const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const patientModel = require('../models/patientModel')




const registerPatient = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    console.log(req.body)

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('please add all fields')
    }

    const patientExists = await patientModel.findOne({email})
    if(patientExists){
        res.status(400)
        throw new Error('user exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
 
  const patient = await Patient.create({
    name,
    email,
    password: hashedPassword,
  })

  if (patient) {
    res.status(201).json({
      _id: patient.id,
      name: patient.name,
      email: patient.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


const loginPatient = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const patient = await Patient.findOne({ email })

  if (patient && (await bcrypt.compare(password, patient.password))) {
    res.json({
      _id: patient.id,
      name: patient.name,
      email: patient.email,
      token: generateToken(patient._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})


const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerPatient,
  loginPatient,
  getMe,
}
