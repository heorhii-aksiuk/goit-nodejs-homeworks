const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const limiter = require('./src/middlewares/rateLimiter')
const usersRouter = require('./src/routes/api/users')
const contactsRouter = require('./src/routes/api/contacts')
const { limit, httpCode } = require('./src/constants/variables')
const { resMessage } = require('./src/constants/messages')
const { STATIC_FOLDER } = process.env

const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(limiter(limit.DURATION, limit.NUMBER_OF_REQUESTS))
app.use(helmet())
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.static(STATIC_FOLDER))
app.use(express.json({ limit: limit.JSON_SIZE }))

app.use('/api/users', usersRouter)
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(httpCode.NOT_FOUND).json({ message: resMessage.NOT_FOUND })
})

app.use((err, req, res, next) => {
  res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: err.message })
})

module.exports = app
