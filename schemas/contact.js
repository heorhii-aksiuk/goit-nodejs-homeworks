const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schemaCreate = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)
    .required(),
})

const schemaUpdate = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().pattern(
    /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  ),
})

const schemaMongoId = Joi.object({
  id: Joi.objectId().required(),
})

module.exports = { schemaCreate, schemaUpdate, schemaMongoId }
