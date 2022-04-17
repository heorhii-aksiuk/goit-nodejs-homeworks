const Contact = require('../../models/contacts/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus } = require('../../constants/messages')

async function listContacts(req, res) {
  const owner = req.user._id
  const { page = 1, limit = 10 } = req.query

  const contacts = await Contact.paginate({ owner }, { page, limit })

  res.json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    data: { contacts },
  })
}

module.exports = listContacts
