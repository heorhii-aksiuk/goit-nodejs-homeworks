const { Schema, model } = require('mongoose')
const { contactStatus, schemaAlert } = require('../../constants/messages')
const { nameLength, regExp } = require('../../constants/variables')

const contactSchema = new Schema(
  {
    name: {
      type: String,
      min: nameLength.MIN,
      max: nameLength.MAX,
      required: [true, schemaAlert.NAME],
    },
    email: {
      type: String,
      required: [true, schemaAlert.EMAIL],
    },
    phone: {
      type: String,
      match: regExp.PHONE,
      required: [true, schemaAlert.PHONE],
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
  return this.favorite ? contactStatus.FAVORITE : contactStatus.COMMON
})

const Contact = model('contact', contactSchema)

module.exports = Contact
