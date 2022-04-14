const User = require('../../models/users/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function current(req, res) {
  const user = await User.findById(req.user.id)

  if (!user) {
    return res.status(httpCode.UNAUTHORIZED).json({
      status: resStatus.ERROR,
      code: httpCode.UNAUTHORIZED,
      message: resMessage.UNAUTHORIZED,
    })
  }

  const { email, subscription } = user

  res.status(httpCode.OK).json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    user: {
      email,
      subscription,
    },
  })
}

module.exports = current
