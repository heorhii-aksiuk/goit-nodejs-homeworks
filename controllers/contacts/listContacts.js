const Contact = require('../../models/contacts/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus } = require('../../constants/messages')

async function listContacts(req, res) {
  const contacts = await Contact.find()

  res.json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    data: { contacts },
  })
}

module.exports = listContacts
