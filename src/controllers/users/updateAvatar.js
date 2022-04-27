const path = require('path')
const fs = require('fs/promises')
const avatarTransform = require('../../helpers/avatarTransform')
const User = require('../../models/users/mongooseModel')
const { httpCode } = require('../../constants/variables')
const { resStatus } = require('../../constants/messages')
const { STATIC_FOLDER } = process.env

async function updateAvatar(req, res) {
  const userId = req.user.id
  const { originalname, path: filePath } = req.file
  const userFolderPath = path.join(STATIC_FOLDER, 'avatars', userId)
  const newFilePath = path.join(userFolderPath, originalname)
  const avatarURL = path.join('avatars', userId, originalname)

  try {
    await avatarTransform(filePath)
    await fs.mkdir(userFolderPath, { recursive: true })
    await fs.rename(filePath, newFilePath)
    await User.findOneAndUpdate(
      { _id: userId },
      { avatarURL },
      {
        new: true,
      },
    )

    res.json({
      status: resStatus.SUCCESS,
      code: httpCode.OK,
      user: {
        avatarURL,
      },
    })
  } catch (error) {
    await fs.unlink(filePath)
    throw error
  }
}

module.exports = updateAvatar
