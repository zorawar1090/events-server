const express = require('express')
const eventRouter = require('./event/router')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(eventRouter)

const port = 5000

app.listen(port, () => console.log(`Listening on port ${port}`))