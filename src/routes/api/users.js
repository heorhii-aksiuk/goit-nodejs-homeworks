const express = require('express')
const auth = require('../../middlewares/auth')
const upload = require('../../middlewares/upload')
const ctrWrapper = require('../../middlewares/ctrlWrapper')
const { validateBody } = require('../../middlewares/validation')
const {
  schemaSignup,
  schemaVerify,
  schemaLogin,
  schemaUpdateSubscription,
} = require('../../models/users/joiSchemas')
const {
  signup,
  reverify,
  verify,
  login,
  logout,
  current,
  updateAvatar,
  updateSubscription,
} = require('../../controllers/users')

const router = express.Router()

router.post('/signup', validateBody(schemaSignup), ctrWrapper(signup))

router.post('/verify', validateBody(schemaVerify), ctrWrapper(reverify))

router.get('/verify/:verificationToken', ctrWrapper(verify))

router.post('/login', validateBody(schemaLogin), ctrWrapper(login))

router.post('/logout', auth, ctrWrapper(logout))

router.get('/current', auth, ctrWrapper(current))

router.post('/avatars', auth, upload.single('avatar'), ctrWrapper(updateAvatar))

router.patch(
  '/subscription',
  auth,
  validateBody(schemaUpdateSubscription),
  ctrWrapper(updateSubscription),
)

module.exports = router
