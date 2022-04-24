import CategoryModel from "../models/categoryModel";

let category = {};

export default class categoryController {
    static async category(req:any, res:any) {
        const {
            name
        } = req.body;

        category = {
            name
        };

        try {
            const addCategory = await CategoryModel.create(category);
            res.status(200).send({ message: "Categoria adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
