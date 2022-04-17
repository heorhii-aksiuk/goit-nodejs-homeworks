const app = require('./app')
const db = require('./config/db')
const { PORT } = require('./constants/variables')
const { serverStatus } = require('./constants/messages')

db.then(() => {
  app.listen(PORT, () => {
    console.log(serverStatus.RUNNING)
  })
}).catch(console.error)
