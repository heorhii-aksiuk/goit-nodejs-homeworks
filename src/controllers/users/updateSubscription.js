const User = require('../../models/users/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function updateSubscription(req, res) {
  const { _id } = req.user
  const { body } = req

  const user = await User.findOneAndUpdate({ _id }, body, {
    new: true,
  })

  if (user) {
    const { email, subscription } = user
    return res.json({
      status: resStatus.SUCCESS,
      code: httpCode.OK,
      user: {
        email,
        subscription,
      },
    })
  }

  res.status(httpCode.NOT_FOUND).json({
    status: resStatus.ERROR,
    code: httpCode.NOT_FOUND,
    message: resMessage.NOT_FOUND,
  })
}

module.exports = updateSubscription
