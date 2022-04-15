const Contact = require('../../models/contacts/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function getContact(req, res) {
  const contact = await Contact.findOne({
    owner: req.user.id,
    _id: req.params.id,
  })

  if (contact) {
    return res.json({
      status: resStatus.SUCCESS,
      code: httpCode.OK,
      data: { contact },
    })
  }

  res.status(httpCode.NOT_FOUND).json({
    status: resStatus.ERROR,
    code: httpCode.NOT_FOUND,
    message: resMessage.NOT_FOUND,
  })
}

module.exports = getContact
