const Contact = require('../../models/contacts/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus, resMessage } = require('../../constants/messages')

async function updateContact(req, res) {
  const { id: _id } = req.params
  const { body } = req

  const contact = await Contact.findOneAndUpdate({ _id }, body, {
    new: true,
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

module.exports = updateContact
