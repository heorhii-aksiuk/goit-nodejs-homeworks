const Joi = require('joi')

const schemaCreate = Joi.object({
  password: Joi.number().required(),
  email: Joi.string().email().required(),
})

module.exports = {
  schemaCreate,
}
