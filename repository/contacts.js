const Contact = require('../models/contact')

const listContacts = async () => {
  const result = Contact.find()
  return result
}

const addContact = async (payload) => {
  const result = Contact.create(payload)
  return result
}

const getContactById = async (id) => {
  const result = Contact.findById(id)
  return result
}

const updateContact = async (id, payload) => {
  const result = Contact.findByIdAndUpdate(id, payload, { new: true })
  return result
}

const removeContact = async (id) => {
  const result = Contact.findByIdAndRemove(id)
  return result
}

module.exports = {
  listContacts,
  addContact,
  getContactById,
  updateContact,
  removeContact,
}
