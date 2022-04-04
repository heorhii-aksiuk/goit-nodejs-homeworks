const express = require('express')
const { validateBody, validateParams } = require('../../middlewares/validation')
const {
  schemaCreate,
  schemaUpdate,
  schemaUpdateFavorite,
  schemaMongoId,
} = require('../../schemas/contact')
const {
  listContacts,
  addContact,
  getContact,
  removeContact,
  updateContact,
} = require('../../controllers/contacts')

const router = express.Router()

router.get('/', listContacts)

router.post('/', validateBody(schemaCreate), addContact)

router.get('/:id', validateParams(schemaMongoId), getContact)

router.delete('/:id', validateParams(schemaMongoId), removeContact)

router.put(
  '/:id',
  [validateBody(schemaUpdate), validateParams(schemaMongoId)],
  updateContact,
)

router.patch(
  '/:id/favorite',
  [validateBody(schemaUpdateFavorite), validateParams(schemaMongoId)],
  updateContact,
)

module.exports = router
