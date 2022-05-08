import { Request, Response } from "express";
import ClientModel from "../models/clientModel";

let client = {};

export default class clientController {
    static async client(req:Request, res:Response) {
        const {
            clientSupplier,
            type,
            name,
            fantasyName,
            CpfCnpj,
            inscription


        } = req.body;

        client = {
            clientSupplier,
            type,
            name,
            fantasyName,
            CpfCnpj,
            inscription
        };

        try {
            const addClient = await ClientModel.create(client);
            res.status(200).send({ message: "Cliente adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }

    static async list(req:Request, res:Response) {
        try {
            const listOfClients = await ClientModel.find({});
            res.status(200).send(listOfClients)
            return
        } catch (err) {
            console.info(err)
        }
    }

    static async profile(req: Request, res: Response) {
        const { id } = req.params
       
        try {
            const profile = await ClientModel.findOne({ id });
            // tratar ID - dever de casa
            console.info(profile)
            res.status(200).send(profile)
            return
        } catch (err) {
            console.info(err)
        }
    }

   

}
