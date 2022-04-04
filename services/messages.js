const { PORT } = require('./constants')

const connectionStatus = {
  CONNECTED: 'Connected to DB',
  ERROR: 'Mongoose connection error',
  DISCONNECTED: 'Disconnected from DB',
}

const serverStatus = {
  RUNNING: `Server running. Use our API on http://localhost:${PORT}`,
}

const resStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const resMessage = {
  NOT_FOUND: 'Not found',
}

const contactStatus = {
  FAVORITE: 'Favorite',
  COMMON: 'Common',
}

const schemaAlert = {
  NAME: 'Set name for contact',
  EMAIL: 'Set email for contact',
  PHONE: 'Set phone for contact',
}

module.exports = {
  connectionStatus,
  serverStatus,
  resStatus,
  resMessage,
  contactStatus,
  schemaAlert,
}
