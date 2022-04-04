const app = require('./app')
const db = require('./config/db')

const PORT = 3000

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on http://localhost:${PORT}`)
  })
}).catch(console.error)
