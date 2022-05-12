import { Request, Response } from "express";
import SupplierModel from "../models/supplierModel";


let supplier = {};

export default class supplierController {
    static async supplier(req:any, res:any) {
        const {
            clientSupplier,
            type,
            name,
            fantasyName,
            cnpj,
            inscription


        } = req.body;

        supplier = {
            clientSupplier,
            type,
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

    static async list(req:Request, res:Response) {
        try {
            const listOfSupplier = await SupplierModel.find({});
            res.status(200).send(listOfSupplier)
            return
        } catch (err) {
            console.info(err)
        }
    }

    static async profile(req: Request, res: Response) {
        const { id } = req.params
       
        try {
            const profile = await SupplierModel.findOne({ id });
            // tratar ID - dever de casa
            console.info(profile)
            res.status(200).send(profile)
            return
        } catch (err) {
            console.info(err)
        }
    }

}
