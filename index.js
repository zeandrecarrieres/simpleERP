const express = require("express")
const app = express()
require("dotenv").config()
const server = require("./server/server")

app.use(server)
const PORT = process.env.PORT || 4500

app.listen(PORT, ()=>{
    console.info(`Server running on: ${PORT}`)
})