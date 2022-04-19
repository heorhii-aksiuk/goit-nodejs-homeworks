const PORT = 3000

const limit = {
  DURATION: 15 * 60 * 1000,
  NUMBER_OF_REQUESTS: 100,
  JSON_SIZE: 10000,
}

const httpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
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
  limit,
  httpCode,
  regExp,
  nameLength,
  passwordLength,
}
