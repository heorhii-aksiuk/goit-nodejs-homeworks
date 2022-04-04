const PORT = 3000

const httpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}

const nameLength = {
  MIN: 3,
  MAX: 30,
}

const regExp = {
  PHONE: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
}

module.exports = {
  PORT,
  httpCode,
  nameLength,
  regExp,
}
