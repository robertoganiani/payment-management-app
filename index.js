const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

// app.use(express.static(`${__dirname}/app`))
app.use(express.static(`${__dirname}/app/build/default`))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' })
})

app.get('/test', (req, res) => {
  res.status(200).send({ hello: 'from server' })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
