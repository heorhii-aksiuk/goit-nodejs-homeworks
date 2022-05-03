const User = require('../../models/users/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function verify(req, res) {
  const { verificationToken } = req.params

  const user = await User.findOne({ verificationToken })

  if (!user) {
    return res.status(httpCode.NOT_FOUND).json({
      status: resStatus.ERROR,
      code: httpCode.NOT_FOUND,
      message: resMessage.NOT_FOUND,
    })
  }

  user.verificationToken = null
  user.verify = true
  await user.save()

  res.json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    message: resMessage.VERIFY_SUCCESS,
  })
}

module.exports = verify
