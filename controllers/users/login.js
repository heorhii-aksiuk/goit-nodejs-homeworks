const jwt = require('jsonwebtoken')
const User = require('../../models/users/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')
const { SECRET_KEY } = process.env

async function login(req, res) {
  const user = await User.findOne({ email: req.body.email })
  const pass = await user?.isValidPassword(req.body.password)

  if (!user || !pass) {
    return res.status(httpCode.UNAUTHORIZED).json({
      status: resStatus.ERROR,
      code: httpCode.UNAUTHORIZED,
      message: resMessage.EMAIL_OR_PASSWORD_WRONG,
    })
  }

  const { id, email, subscription } = user
  const token = jwt.sign({ id, email, subscription }, SECRET_KEY, {
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

module.exports = login