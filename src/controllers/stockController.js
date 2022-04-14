const StockModel = require("../models/stockModel")

let stock = {}

module.exports = class stockController {
    static async stock(req, res){
        const {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost

        } = req.body
    
        stock = {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost
        }

        try {
            const addStock = await StockModel.create(stock)
            res.status(200).send({message: "Stock adicionado"})
            return
        } catch (err) {
            res.status(404).send({message: "Insira todas as informações"})
            console.info(err)
            return
        }


        
    }
}