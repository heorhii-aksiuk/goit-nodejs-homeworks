const jwt = require('jsonwebtoken')
const User = require('../models/users/mongooseModel')
const { httpCode } = require('../constants/variables')
const { resStatus, resMessage } = require('../constants/messages')
const { SECRET_KEY } = process.env

const signup = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) {
    return res.status(httpCode.CONFLICT).json({
      status: resStatus.ERROR,
      code: httpCode.CONFLICT,
      message: resMessage.USER_EXIST,
    })
  }
  const newUser = await User.create(req.body)
  const { email, subscription } = newUser
  res.status(httpCode.CREATED).json({
    status: resStatus.SUCCESS,
    code: httpCode.CREATED,
    user: {
      email,
      subscription,
    },
  })
}

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  const pass = await user?.isValidPassword(req.body.password)
  if (!user || !pass) {
    return res.status(httpCode.UNAUTHORIZED).json({
      status: resStatus.ERROR,
      code: httpCode.UNAUTHORIZED,
      message: resMessage.UNAUTHORIZED,
    })
  }
  const { id, email, subscription } = user
  const token = jwt.sign({ email, subscription }, SECRET_KEY, {
    expiresIn: '1d',
  })
  await User.findByIdAndUpdate(id, { token })
  res.status(httpCode.OK).json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    token,
    user: {
      email,
      subscription,
    },
  })
}

module.exports = {
  signup,
  login,
}
