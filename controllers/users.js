const User = require('../models/users/mongooseModel')
const { httpCode } = require('../constants/variables')
const { resStatus, resMessage } = require('../constants/messages')

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
    data: {
      email,
      subscription,
    },
  })
}

module.exports = {
  signup,
}
