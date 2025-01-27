const { httpCode } = require('../constants/variables')
const { resStatus } = require('../constants/messages')

function validateBody(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body)
      next()
    } catch (error) {
      console.log(error)

      return res.status(httpCode.BAD_REQUEST).json({
        status: resStatus.ERROR,
        code: httpCode.BAD_REQUEST,
        message: error.message,
      })
    }
  }
}

function validateParams(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.params)
      next()
    } catch (error) {
      console.log(error)

      return res.status(httpCode.BAD_REQUEST).json({
        status: resStatus.ERROR,
        code: httpCode.BAD_REQUEST,
        message: error.message,
      })
    }
  }
}

module.exports = { validateBody, validateParams }
