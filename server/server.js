const express = require("express")
const server = express()
const cors = require("cors")

server.use(express.json())
const corsOptions = {
    origin:"http://localhost",
    optionsSuccessStatus:200 // for some legagy browsers
}

server.use(cors(corsOptions))
//Routers Injection
const homeRouter = require("../src/routers/homeRouter")
const stockRouter = require("../src/routers/stockRouter")

server.use(homeRouter)
server.use(stockRouter)

module.exports = server