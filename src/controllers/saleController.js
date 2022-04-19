import SaleModel from "../models/saleModel";

let sale = {};

export default class saleController {
    static async sale(req, res) {
        const {
            clientId,
            salerId

        } = req.body;

        sale = {
            clientId,
            salerId
        };

        try {
            const addSale = await SaleModel.create(sale);
            res.status(200).send({ message: "Venda adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
