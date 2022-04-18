import SalesModel from "../models/salesModel";

let sales = {};

export default class salesController {
    static async sales(req, res) {
        const {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost,
        } = req.body;

        sales = {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost,
        };

        try {
            const addSales = await SalesModel.create(sales);
            res.status(200).send({ message: "Venda adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
