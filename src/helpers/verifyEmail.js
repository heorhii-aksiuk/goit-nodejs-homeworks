const sgMail = require('@sendgrid/mail')
const Mailgen = require('mailgen')

const { SENDGRID_API_KEY, SENDGRID_FROM } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'My Phonebook',
    link: 'http://localhost:3000/',
  },
})

async function verifyEmail(user, verificationToken) {
  const email = {
    body: {
      name: user,
      intro:
        "Welcome to My Phonebook! We're very excited to have you on board.",
      action: {
        instructions: 'To get started with My Phonebook!, please click here:',
        button: {
          color: '#22BC66',
          text: 'Confirm your account',
          link: `http://localhost:3000/api/users/verify/${verificationToken}`,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  }

  const emailBody = mailGenerator.generate(email)

  const message = {
    to: user,
    from: SENDGRID_FROM,
    subject: 'Welcome to My Phonebook! Confirm Your Email',
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
