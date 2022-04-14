const Contact = require('../../models/contacts/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus } = require('../../constants/messages')

async function addContact(req, res) {
  const contact = await Contact.create(req.body)

  res.status(httpCode.CREATED).json({
    status: resStatus.SUCCESS,
    code: httpCode.CREATED,
    data: { contact },
  })
}

module.exports = addContact
