const multer = require('multer')
const { limit } = require('../constants/variables')
const { errorMessage } = require('../constants/messages')
const { UPLOAD_FOLDER } = process.env

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: limit.IMAGE_SIZE },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      return cb(null, true)
    }
    cb(new Error(errorMessage.UPLOAD_IMAGE))
  },
})

module.exports = upload
