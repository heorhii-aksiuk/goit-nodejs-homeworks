const express = require('express')
const contactsModel = require('../../models/contacts')

const router = express.Router()

router.get('/', async (req, res, next) => {
  const contacts = await contactsModel.listContacts()
  res.json({ status: 'success', code: 200, data: { contacts } })
})

router.get('/:contactId', async (req, res, next) => {
  const contact = await contactsModel.getContactById(req.params.contactId)
  if (contact) {
    return res.json({ status: 'success', code: 200, data: { contact } })
  }
  return res
    .status(404)
    .json({ status: 'error', code: 404, message: 'Not Found' })
})

router.post('/', async (req, res, next) => {
  const newContact = await contactsModel.addContact(req.body)
  res.status(201).json({ status: 'success', code: 201, data: { newContact } })
})

router.delete('/:contactId', async (req, res, next) => {
  const deletedContact = await contactsModel.removeContact(req.params.contactId)
  if (deletedContact) {
    return res.json({ status: 'success', code: 200, data: { deletedContact } })
  }
  return res
    .status(404)
    .json({ status: 'error', code: 404, message: 'Not Found' })
})

router.put('/:contactId', async (req, res, next) => {
  const updatedContact = await contactsModel.updateContact(
    req.params.contactId,
    req.body,
  )
  if (updatedContact) {
    return res.json({ status: 'success', code: 200, data: { updatedContact } })
  }
  return res
    .status(404)
    .json({ status: 'error', code: 404, message: 'Not Found' })
})

module.exports = router
