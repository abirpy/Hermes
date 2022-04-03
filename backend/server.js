const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const path = require('path')
const patientRoute = require('./routes/patient')
// const { errorHandler } = require('./middleware/errorMiddleware')
// const connectDB = require('./config/db')
const port = process.env.PORT || 5000



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('../public'))

const dbo = require('./db/conn')

app.use('/api/patient', patientRoute)
// app.get('/api/patient', (req, res) => res.send('get patients'))
// app.get('/api/clinicians', require('./routes/clinicians'))

// to frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'public', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('set to production?'))
}


app.listen(port, () => console.log(`Server started on port ${port}`))
