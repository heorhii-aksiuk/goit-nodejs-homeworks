const Contact = require('../models/contact')

const listContacts = async () => Contact.find()

const addContact = async (payload) => Contact.create(payload)

const getContact = async (id) => Contact.findById(id)

const removeContact = async (id) => Contact.findByIdAndRemove(id)

const updateContact = async (id, payload) =>
  Contact.findByIdAndUpdate(id, payload, { new: true })

module.exports = {
  listContacts,
  addContact,
  getContact,
  removeContact,
  updateContact,
}
