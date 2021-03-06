import SaleProductsModel from "../models/SaleProductsModel";

let sales = {};

export default class saleProductController {
    static async saleProduct(req:any, res:any) {
        const {
            saleId,
            productId,
            productQuantity,
            discount,
            value

        } = req.body;

        sales = {
            saleId,
            productId,
            productQuantity,
            discount,
            value
        };

        try {
            const addSaleProduct = await SaleProductsModel.create(sales);
            res.status(200).send({ message: "Lista de produtos adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
