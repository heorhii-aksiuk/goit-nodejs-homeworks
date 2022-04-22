const Jimp = require('jimp')
const { avatarSize } = require('../constants/variables')

async function transform(filePath) {
  const picture = await Jimp.read(filePath)
  await picture
    .cover(
      avatarSize.WIDTH,
      avatarSize.HIGHT,
      Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
    )
    .writeAsync(filePath)
}

module.exports = transform
