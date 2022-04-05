const app = require('./app')
const db = require('./config/db')
const { PORT } = require('./services/constants')
const { serverStatus } = require('./services/messages')

db.then(() => {
  app.listen(PORT, () => {
    console.log(serverStatus.RUNNING)
  })
}).catch(console.error)
