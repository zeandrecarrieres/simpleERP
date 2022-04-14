const router = require("express").Router()
const stockController = require("../controllers/stockController")

router.post('/stock', stockController.stock)

module.exports = router