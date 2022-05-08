import CategoryModel from "../models/categoryModel";

let data = {};

export default class categoryController {
    static async category(req:any, res:any) {
        const {
            category
        } = req.body;

        data = { category }

        try {
            const addCategory = await CategoryModel.create(data);
            res.status(200).send({ message: "Categoria adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }


    static async list(req:any, res:any) {
      
        try {
            const listOfCategory = await CategoryModel.find({});
            res.status(200).send(listOfCategory);
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
