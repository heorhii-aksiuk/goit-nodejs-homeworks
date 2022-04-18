const mongoosePaginate = require('mongoose-paginate-v2')
const { Schema, model } = require('mongoose')

const {
  contactStatus,
  contactSchemaAlert: alertMessage,
} = require('../../constants/messages')
const { nameLength, regExp } = require('../../constants/variables')

const contactSchema = new Schema(
  {
    name: {
      type: String,
      min: nameLength.MIN,
      max: nameLength.MAX,
      required: [true, alertMessage.NAME],
    },
    email: {
      type: String,
      required: [true, alertMessage.EMAIL],
    },
    phone: {
      type: String,
      match: regExp.PHONE,
      required: [true, alertMessage.PHONE],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
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

contactSchema.plugin(mongoosePaginate)

const Contact = model('contact', contactSchema)

module.exports = Contact
