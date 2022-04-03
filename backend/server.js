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

app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(express.static(__dirname + '/../public'))

const dbo = require('./db/conn')

app.use('/api/patient', patientRoute)
// app.get('/api/patient', (req, res) => res.send('get patients'))
// app.get('/api/clinicians', require('./routes/clinicians'))

// to frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(__dirname))
//   console.log(path.resolve(__dirname, '..', 'build', 'index.html'))
//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '..', 'build', 'index.html')
//     )
//   )
// } else {
//   app.get('/', (req, res) => res.send('set to production?'))
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname))
  console.log(path.resolve(__dirname, '..', 'build', 'index.html'))
  app.get('/', (req, res) =>
    res.send('root')
  )
} else {
  app.get('/', (req, res) => res.send('set to production?'))
}

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});