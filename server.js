const app = require('./app')
const db = require('./src/config/db')
const { PORT } = require('./src/constants/variables')
const { serverStatus } = require('./src/constants/messages')

db.then(() => {
  app.listen(PORT, () => {
    console.log(serverStatus.RUNNING)
  })
}).catch(console.error)
