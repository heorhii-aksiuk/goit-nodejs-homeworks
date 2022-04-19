const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { Schema, model } = require('mongoose')
const {
  userSchemaAlert: alertMessage,
  subscriptionType,
} = require('../../constants/messages')

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, alertMessage.PASSWORD],
    },
    email: {
      type: String,
      required: [true, alertMessage.EMAIL],
      unique: true,
    },
    subscription: {
      type: String,
      enum: [
        subscriptionType.STARTER,
        subscriptionType.PRO,
        subscriptionType.BUSINESS,
      ],
      default: subscriptionType.STARTER,
    },
    avatarURL: {
      type: String,
      default: function () {
        return gravatar.url(this.email, { s: '250' }, true)
      },
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id
        return ret
      },
    },
    toObject: { virtuals: true },
  },
)

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const User = model('user', userSchema)

module.exports = User
