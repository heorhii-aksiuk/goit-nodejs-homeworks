const Joi = require('joi')

const schemaCreateContact = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'any.required': 'Поле name обязательное',
    'string.empty': 'Поле name не может быть пустым',
    'string.min': 'Поле name не может быть менее 3 символов',
    'string.max': 'Поле name не может быть более 30 символов',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Поле email обязательное',
    'string.empty': 'Поле email не может быть пустым',
    'string.email': 'Введите валидный email',
  }),

  phone: Joi.string()
    .pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)
    .required()
    .messages({
      'any.required': 'Поле phone обязательное',
      'string.empty': 'Поле phone не может быть пустым',
      'object.pattern.match': 'Введите валидный phone number',
    }),
})

module.exports = { schemaCreateContact }