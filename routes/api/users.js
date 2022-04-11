const express = require('express')
const ctrWrapper = require('../../middlewares/ctrlWrapper')
const { signup } = require('../../controllers/users')
const router = express.Router()

router.post('/signup', ctrWrapper(signup))

// router.post('/login')

// router.post('/logout')

module.exports = router
