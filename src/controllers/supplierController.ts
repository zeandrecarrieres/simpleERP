import SupplierModel from "../models/supplierModel";

let supplier = {};

export default class supplierController {
    static async supplier(req:any, res:any) {
        const {
            name,
            fantasyName,
            cnpj,
            inscription


        } = req.body;

        supplier = {
            name,
            fantasyName,
            cnpj,
            inscription
        };

        try {
            const addSupplier = await SupplierModel.create(supplier);
            res.status(200).send({ message: "Fornecedor adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
