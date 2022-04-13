const PORT = 3000

const httpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
}

const regExp = {
  PHONE: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
}

const nameLength = {
  MIN: 3,
  MAX: 30,
}

const passwordLength = {
  MIN: 9,
  MAX: 30,
}

module.exports = {
  PORT,
  httpCode,
  regExp,
  nameLength,
  passwordLength,
}
