const jwt = require('jsonwebtoken')
const { SECRET_KEY } = process.env

const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    return false
  }
}

module.exports = verifyToken
