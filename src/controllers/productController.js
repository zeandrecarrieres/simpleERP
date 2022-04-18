import ProductModel from "../models/productkModel";

let product = {};

export default class productController {
    static async product(req, res) {
        const {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost,
        } = req.body;

        product = {
            code,
            productQuantity,
            productIn,
            productOut,
            productPrice,
            productCost,
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
