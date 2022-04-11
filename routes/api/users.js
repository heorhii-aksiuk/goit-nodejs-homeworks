const express = require('express')
const ctrWrapper = require('../../middlewares/ctrlWrapper')
const { validateBody } = require('../../middlewares/validation')
const { schemaCreate } = require('../../models/users/joiSchemas')
const { signup } = require('../../controllers/users')
const router = express.Router()

router.post('/signup', validateBody(schemaCreate), ctrWrapper(signup))

// router.post('/login')

// router.post('/logout')

module.exports = router
