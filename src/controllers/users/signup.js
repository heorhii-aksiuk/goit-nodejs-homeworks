const User = require('../../models/users/mongooseModel')
const { v4: uuid } = require('uuid')
const verifyEmail = require('../../helpers/verifyEmail')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function signup(req, res) {
  const { body } = req
  const { email } = body

  const user = await User.findOne({ email })

  if (user) {
    return res.status(httpCode.CONFLICT).json({
      status: resStatus.ERROR,
      code: httpCode.CONFLICT,
      message: resMessage.USER_EXIST,
    })
  }

  const verificationToken = uuid()
  const newUser = await User.create({ verificationToken, ...body })
  await verifyEmail(email, verificationToken)
  const { subscription, avatarURL } = newUser

  res.status(httpCode.CREATED).json({
    status: resStatus.SUCCESS,
    code: httpCode.CREATED,
    user: {
      email,
      subscription,
      avatarURL,
    },
  })
}

module.exports = signup
