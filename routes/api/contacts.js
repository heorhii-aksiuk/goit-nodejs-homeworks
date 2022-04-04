const express = require('express')
const ctrl = require('../../controllers/contacts')
const { validateBody, validateParams } = require('../../middlewares/validation')
const {
  schemaCreate,
  schemaUpdate,
  schemaMongoId,
} = require('../../schemas/contact')

const router = express.Router()

router.get('/', ctrl.listContacts)

router.post('/', validateBody(schemaCreate), ctrl.addContact)

router.get('/:id', validateParams(schemaMongoId), ctrl.getContact)

router.delete('/:id', validateParams(schemaMongoId), ctrl.removeContact)

router.put(
  '/:id',
  [validateBody(schemaUpdate), validateParams(schemaMongoId)],
  ctrl.updateContact,
)

module.exports = router
