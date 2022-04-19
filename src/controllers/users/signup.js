const User = require('../../models/users/mongooseModel')
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

  const newUser = await User.create(body)
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
