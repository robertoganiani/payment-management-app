const express = require('express')
const bodyParser = require('body-parser')
const expressJWT = require('express-jwt')
const path = require('path')
const mongoose = require('mongoose')

const config = require('./config')
const routes = require('./routes/index')

const app = express()
const PORT = process.env.PORT || 8000
const MONGO_URI = config.mongoUri

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI)
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab'))
  .on('error', error => console.log('Error connecting to MongoLab: ', error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'app')))
// app.use(express.static(`${__dirname}/app/build/default`))
// app.use(
//   expressJWT({ secret: config.jwtSecret }).unless({
//     path: ['/signin']
//   })
// )

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' })
})

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
