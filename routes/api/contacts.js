const express = require('express')
const ctrl = require('../../controllers/contacts')
const validateBody = require('../../middlewares/validateBody')
const { schemaCreate, schemaUpdate } = require('../../schemas/contact')

const router = express.Router()

router.get('/', ctrl.listContacts)

router.post('/', validateBody(schemaCreate), ctrl.addContact)

router.get('/:id', ctrl.getContact)

router.delete('/:id', ctrl.removeContact)

router.put('/:id', validateBody(schemaUpdate), ctrl.updateContact)

module.exports = router
