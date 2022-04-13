const express = require('express')
const ctrWrapper = require('../../middlewares/ctrlWrapper')
const { validateBody } = require('../../middlewares/validation')
const { schemaSignup, schemaLogin } = require('../../models/users/joiSchemas')
const { signup, login } = require('../../controllers/users')
const router = express.Router()

router.post('/signup', validateBody(schemaSignup), ctrWrapper(signup))

router.post('/login', validateBody(schemaLogin), ctrWrapper(login))

// router.post('/logout')

module.exports = router
