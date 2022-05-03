const Joi = require('joi')
const { passwordLength } = require('../../constants/variables')
const {
  userSchemaAlert: alertMessage,
  subscriptionType,
} = require('../../constants/messages')

const schemaSignup = Joi.object({
  password: Joi.string()
    .min(passwordLength.MIN)
    .max(passwordLength.MAX)
    .required()
    .messages({
      'any.required': alertMessage.PASSWORD,
    }),
  email: Joi.string().email().required().messages({
    'any.required': alertMessage.EMAIL,
  }),
  subscription: Joi.string().valid(
    subscriptionType.STARTER,
    subscriptionType.PRO,
    subscriptionType.BUSINESS,
  ),
})

const schemaVerify = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': alertMessage.EMAIL,
  }),
})

const schemaLogin = Joi.object({
  password: Joi.string().required().messages({
    'any.required': alertMessage.PASSWORD,
  }),
  email: Joi.string().email().required().messages({
    'any.required': alertMessage.EMAIL,
  }),
  subscription: Joi.string().valid(
    subscriptionType.STARTER,
    subscriptionType.PRO,
    subscriptionType.BUSINESS,
  ),
})

const schemaUpdateSubscription = Joi.object({
  subscription: Joi.string()
    .valid(
      subscriptionType.STARTER,
      subscriptionType.PRO,
      subscriptionType.BUSINESS,
    )
    .required(),
})

module.exports = {
  schemaSignup,
  schemaVerify,
  schemaLogin,
  schemaUpdateSubscription,
}
