const express = require('express')


const cliniciansRouter = express.Router()

const{ registerClinician, loginClinician, getMe} = require('../controllers/clinicianController')
const { protect } = require('../middleware/auth')

const dbo = require('../db/conn')

cliniciansRouter.post('/signup', registerClinician)
cliniciansRouter.post('/login', loginClinician)
cliniciansRouter.get('/me', protect, getMe)

cliniciansRouter.route('/clinician').get(function (req, res) {

})

module.exports = cliniciansRouter