const Contact = require('../../models/contacts/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus } = require('../../constants/messages')

async function listContacts(req, res) {
  const owner = req.user._id
  const { page = 1, limit = 10, favorite } = req.query
  const query = favorite ? { owner, favorite } : { owner }

  const contacts = await Contact.paginate(query, { page, limit })

  res.json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    data: { contacts },
  })
}

module.exports = listContacts
