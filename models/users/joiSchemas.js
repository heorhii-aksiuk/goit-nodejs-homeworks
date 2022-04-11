const Joi = require('joi')
const { passwordLength } = require('../../constants/variables')
const { userSchemaAlert: alertMessage } = require('../../constants/messages')

const schemaCreate = Joi.object({
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
})

module.exports = {
  schemaCreate,
}
