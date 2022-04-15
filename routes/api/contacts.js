const express = require('express')
const auth = require('../../middlewares/auth')
const ctrWrapper = require('../../middlewares/ctrlWrapper')
const { validateBody, validateParams } = require('../../middlewares/validation')
const {
  schemaCreate,
  schemaUpdate,
  schemaUpdateFavorite,
  schemaMongoId,
} = require('../../models/contacts/joiSchemas')
const {
  listContacts,
  addContact,
  getContact,
  removeContact,
  updateContact,
} = require('../../controllers/contacts')

const router = express.Router()

router.get('/', auth, ctrWrapper(listContacts))

router.post('/', auth, validateBody(schemaCreate), ctrWrapper(addContact))

router.get('/:id', auth, validateParams(schemaMongoId), ctrWrapper(getContact))

router.delete(
  '/:id',
  auth,
  validateParams(schemaMongoId),
  ctrWrapper(removeContact),
)

router.put(
  '/:id',
  auth,
  validateBody(schemaUpdate),
  validateParams(schemaMongoId),
  ctrWrapper(updateContact),
)

router.patch(
  '/:id/favorite',
  auth,
  validateBody(schemaUpdateFavorite),
  validateParams(schemaMongoId),
  ctrWrapper(updateContact),
)

module.exports = router
