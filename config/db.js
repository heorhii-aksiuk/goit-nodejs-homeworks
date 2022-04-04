const mongoose = require('mongoose')
const { connectionStatus } = require('../services/messages')

const uri = process.env.URI_DB

const db = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log(connectionStatus.CONNECTED)
})

mongoose.connection.on('error', (error) => {
  console.log(`${connectionStatus.ERROR}: ${error}`)
})

mongoose.connection.on('disconnected', () =>
  console.log(connectionStatus.DISCONNECTED),
)

process.on('SIGINT', async () => {
  mongoose.connection.close(() => {
    console.log(connectionStatus.DISCONNECTED)
    process.exit(1)
  })
})

module.exports = db
