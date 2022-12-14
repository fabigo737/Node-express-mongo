const express = require('express')
const petAPI = require('./routes/petRoute')
require('dotenv').config()
const app = express()


app.use(express.json())

petAPI(app)

app.listen(process.env.PORT)