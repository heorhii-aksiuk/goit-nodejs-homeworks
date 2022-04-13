const User = require('../models/users/mongooseModel')
const verifyToken = require('../services/verifyToken')
const { httpCode } = require('../constants/variables')
const { resStatus, resMessage } = require('../constants/messages')

const auth = async (req, res, next) => {
  const token = req.get('Authorization')?.split(' ')[1]
  const decodedToken = verifyToken(token)
  const { id } = decodedToken
  const user = await User.findById(id)
  if (!decodedToken || !user) {
    return res.status(httpCode.UNAUTHORIZED).json({
      status: resStatus.ERROR,
      code: httpCode.UNAUTHORIZED,
      message: resMessage.UNAUTHORIZED,
    })
  }
  req.user = user
  console.log(req.user)
  next()
}

module.exports = auth
