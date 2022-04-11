const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const { nameLength, regExp } = require('../../constants/variables')

const schemaCreate = Joi.object({
  name: Joi.string().min(nameLength.MIN).max(nameLength.MAX).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(regExp.PHONE).required(),
  //TODO: owner field?
})

const schemaUpdate = Joi.object({
  name: Joi.string().min(nameLength.MIN).max(nameLength.MAX),
  email: Joi.string().email(),
  phone: Joi.string().pattern(regExp.PHONE),
})

const schemaUpdateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
})

const schemaMongoId = Joi.object({
  id: Joi.objectId().required(),
})

module.exports = {
  schemaCreate,
  schemaUpdate,
  schemaUpdateFavorite,
  schemaMongoId,
}
