const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const usersRouter = require('./routes/api/users')
const contactsRouter = require('./routes/api/contacts')
const { httpCode } = require('./constants/variables')
const { resMessage } = require('./constants/messages')

const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(httpCode.NOT_FOUND).json({ message: resMessage.NOT_FOUND })
})

app.use((err, req, res, next) => {
  res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: err.message })
})

module.exports = app
