const express = require('express')


const patientsRouter = express.Router()

const { registerPatient, loginPatient, getMe} = require('../controllers/patientController')
const { protect } = require('../middleware/auth')


patientsRouter.post('/signup', registerPatient)
patientsRouter.post('/login', loginPatient)
patientsRouter.get('/me', protect, getMe)


module.exports = patientsRouter

