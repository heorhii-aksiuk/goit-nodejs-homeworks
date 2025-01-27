const { PORT } = require('./variables')

// DB
const connectionStatus = {
  CONNECTED: 'Connected to DB',
  ERROR: 'Mongoose connection error',
  DISCONNECTED: 'Disconnected from DB',
}

// Server
const serverStatus = {
  RUNNING: `Server running. Use our API on http://localhost:${PORT}`,
}

// Response
const resStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const resMessage = {
  NOT_FOUND: 'Not found',
  USER_EXIST: 'User already exist',
  UNAUTHORIZED: 'Not authorized',
  VERIFY_SUCCESS: 'Verification successful',
  VERIFY_SENT: 'Verification email sent',
  ALREADY_VERIFY: 'Verification has already been passed',
  EMAIL_OR_PASSWORD_WRONG: 'Email or password is wrong',
  TOO_MANY_REQUESTS: 'Too many requests, please try again later',
}

// Contacts
const contactSchemaAlert = {
  NAME: 'Set name for contact',
  EMAIL: 'Set email for contact',
  PHONE: 'Set phone for contact',
}

const contactStatus = {
  FAVORITE: 'Favorite',
  COMMON: 'Common',
}

// User
const userSchemaAlert = {
  PASSWORD: 'Password is required',
  EMAIL: 'Email is required',
  VERIFY_TOKEN: 'Verify token is required',
}

const subscriptionType = {
  STARTER: 'starter',
  PRO: 'pro',
  BUSINESS: 'business',
}

const emailContent = {
  APP_NAME: 'My Phonebook',
  APP_LINK: 'http://localhost:3000/',
  INTRO: "Welcome to My Phonebook! We're very excited to have you on board.",
  INSTRUCTION: 'To get started with My Phonebook!, please click here:',
  TEXT: 'Confirm your account',
  OUTRO:
    "Need help, or have questions? Just reply to this email, we'd love to help.",
  SUBJECT: 'Welcome to My Phonebook! Confirm Your Email',
}

// Errors

const errorMessage = {
  UPLOAD_IMAGE: 'Only images are allowed',
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
  emailContent,
  errorMessage,
}
