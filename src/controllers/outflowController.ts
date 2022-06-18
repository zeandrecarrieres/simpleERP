import incomeModel from "../models/incomeModel";

let data = {};

export default class outflowController {
    // static async category(req:any, res:any) {
    //     const {
    //         category
    //     } = req.body;

    //     data = { category }

    //     try {
    //         const addCategory = await CategoryModel.create(data);
    //         res.status(200).send({ message: "Categoria adicionada" });
    //         return;
    //     } catch (err) {
    //         res.status(404).send({ message: "Insira todas as informações" });
    //         console.info(err);
    //         return;
    //     }
    // }


    static async list(req:any, res:any) {
      
        try {
            const listOfOutflow = await incomeModel.find({}).populate('supplierId').setOptions({strictQuery: false})
            res.status(200).send(listOfOutflow);
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
