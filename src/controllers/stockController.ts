import StockModel from "../models/stockModel";

let stock = {};

export default class stockController {
    static async stock(req:any, res:any) {
        const {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost,
        } = req.body;

        stock = {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost,
        };

        try {
            const addStock = await StockModel.create(stock);
            res.status(200).send({ message: "Stock adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
