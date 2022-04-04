const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { contactStatus } = require('../services/messages')

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.favorite
        delete ret._id
        return ret
      },
    },
    toObject: { virtuals: true },
  },
)

contactSchema.virtual('status').get(function () {
  const { FAVORITE, COMMON } = contactStatus
  return this.favorite ? FAVORITE : COMMON
})

const Contact = model('contact', contactSchema)

module.exports = Contact
