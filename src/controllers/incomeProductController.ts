import IncomeProductModel from "../models/incomeProductModel";

let income = {};

export default class incomeProductController {
    static async incomeProduct(req:any, res:any) {
        const {
            incomeId,
            productId,
            productQuantity,
            discount,
            value

        } = req.body;

        income = {
            incomeId,
            productId,
            productQuantity,
            discount,
            value
        };

        try {
            const addIncomeProduct = await IncomeProductModel.create(income);
            res.status(200).send({ message: "Lista de produtos adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
