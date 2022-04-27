const rateLimit = require('express-rate-limit')
const { httpCode } = require('../constants/variables')
const { resStatus, resMessage } = require('../constants/messages')

const limiter = (duration, limit) => {
  return rateLimit({
    windowMs: duration,
    max: limit,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      return res.status(httpCode.TOO_MANY_REQUESTS).json({
        status: resStatus.ERROR,
        code: httpCode.TOO_MANY_REQUESTS,
        message: resMessage.TOO_MANY_REQUESTS,
      })
    },
  })
}

module.exports = limiter
