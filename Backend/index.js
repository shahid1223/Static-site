const connectTOMongo = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 9000

connectTOMongo()

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/crousal', require('./routes/crousal'))
app.use('/api/about', require('./routes/about'))
app.use('/api/services', require('./routes/services'))
app.use('/api/contactus', require('./routes/contactus'))

app.listen(PORT, () => {
    console.log(`my-site backend listening at http://localhost:${PORT}`)
})