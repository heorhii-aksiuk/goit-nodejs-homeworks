const { PORT } = require('./variables')

//DB
const connectionStatus = {
  CONNECTED: 'Connected to DB',
  ERROR: 'Mongoose connection error',
  DISCONNECTED: 'Disconnected from DB',
}

//Server
const serverStatus = {
  RUNNING: `Server running. Use our API on http://localhost:${PORT}`,
}

//Response
const resStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const resMessage = {
  NOT_FOUND: 'Not found',
  USER_EXIST: 'User already exist',
  UNAUTHORIZED: 'Email or password is wrong',
}

//Contacts
const contactSchemaAlert = {
  NAME: 'Set name for contact',
  EMAIL: 'Set email for contact',
  PHONE: 'Set phone for contact',
}

const contactStatus = {
  FAVORITE: 'Favorite',
  COMMON: 'Common',
}

//User
const userSchemaAlert = {
  PASSWORD: 'Password is required',
  EMAIL: 'Email is required',
}

const subscriptionType = {
  STARTER: 'starter',
  PRO: 'pro',
  BUSINESS: 'business',
}

module.exports = {
  connectionStatus,
  serverStatus,
  resStatus,
  resMessage,
  contactSchemaAlert,
  contactStatus,
  userSchemaAlert,
  subscriptionType,
}
