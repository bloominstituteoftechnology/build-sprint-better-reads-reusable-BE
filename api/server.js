const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
const authRouter = require('../auth/authRouter')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
server.use('/api/auth', authRouter)



server.get('/', (req, res) =>
{
    res.send("server is running")
})
module.exports = server