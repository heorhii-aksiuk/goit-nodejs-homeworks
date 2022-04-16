const User = require('../../models/users/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function logout(req, res) {
  console.log(req.user)
  const { _id } = req.user

  const user = await User.findById(_id)

  if (!user) {
    return res.status(httpCode.UNAUTHORIZED).json({
      status: resStatus.ERROR,
      code: httpCode.UNAUTHORIZED,
      message: resMessage.UNAUTHORIZED,
    })
  }

  await User.findByIdAndUpdate(_id, { token: null })

  res.status(httpCode.NO_CONTENT).json()
}

module.exports = logout
