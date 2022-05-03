const { v4: uuid } = require('uuid')
const User = require('../../models/users/mongooseModel')
const verifyEmail = require('../../helpers/verifyEmail')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function reverify(req, res) {
  const { email } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(httpCode.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpCode.NOT_FOUND,
      message: resMessage.NOT_FOUND,
    })
  }

  if (user.verify) {
    return res.status(httpCode.BAD_REQUEST).json({
      status: resStatus.ERROR,
      code: httpCode.BAD_REQUEST,
      message: resMessage.ALREADY_VERIFY,
    })
  }

  const verificationToken = uuid()
  user.verificationToken = verificationToken
  await user.save()
  await verifyEmail(email, verificationToken)

  res.json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    message: resMessage.VERIFY_SENT,
  })
}

module.exports = reverify
