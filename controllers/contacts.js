const Contact = require('../models/contacts/mongooseModel')
const { httpCode } = require('../constants/variables')
const { resStatus, resMessage } = require('../constants/messages')

const listContacts = async (req, res) => {
  const contacts = await Contact.find()
  res.json({
    status: resStatus.SUCCESS,
    code: httpCode.OK,
    data: { contacts },
  })
}

const addContact = async (req, res) => {
  const contact = await Contact.create(req.body)
  res.status(httpCode.CREATED).json({
    status: resStatus.SUCCESS,
    code: httpCode.CREATED,
    data: { contact },
  })
}

const getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id)
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

const removeContact = async (req, res) => {
  const contact = await Contact.findByIdAndRemove(req.params.id)
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

const updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
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

module.exports = {
  listContacts,
  addContact,
  getContact,
  removeContact,
  updateContact,
}
