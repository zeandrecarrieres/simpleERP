import ProductModel from "../models/productModel";

let product = {};

export default class productController {
    static async product(req, res) {
        const {
            code,
            categoryId,
            name,
            unit,
            price,
            cost

        } = req.body;

        product = {
            code,
            categoryId,
            name,
            unit,
            price,
            cost
        };

        try {
            const addProduct = await ProductModel.create(product);
            res.status(200).send({ message: "Produto adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
