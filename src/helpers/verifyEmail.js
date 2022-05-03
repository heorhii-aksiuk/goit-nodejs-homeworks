const sgMail = require('@sendgrid/mail')
const Mailgen = require('mailgen')
const { emailContent } = require('../constants/messages')

const { SENDGRID_API_KEY, SENDGRID_FROM } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: emailContent.APP_NAME,
    link: emailContent.APP_LINK,
  },
})

async function verifyEmail(user, verificationToken) {
  const email = {
    body: {
      name: user,
      intro: emailContent.INTRO,
      action: {
        instructions: emailContent.INSTRUCTION,
        button: {
          color: '#22BC66',
          text: emailContent.TEXT,
          link: `${emailContent.APP_LINK}api/users/verify/${verificationToken}`,
        },
      },
      outro: emailContent.OUTRO,
    },
  }

  const emailBody = mailGenerator.generate(email)

  const message = {
    to: user,
    from: SENDGRID_FROM,
    subject: emailContent.SUBJECT,
    html: emailBody,
  }

  try {
    await sgMail.send(message)
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
  }
}

module.exports = verifyEmail
