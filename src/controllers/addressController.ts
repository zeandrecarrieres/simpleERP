import { Request, Response } from "express";
import AddressModel from "../models/addressModel";

let address = {};

export default class addressController {
    static async address(req:any, res:any) {
        const {
            referenceId,
            referenceType,
            street,
            number,
            complement,
            district,
            zipCode,
            city,
            state,
            country

        } = req.body;

        address = {
            referenceId,
            referenceType,
            street,
            number,
            complement,
            district,
            zipCode,
            city,
            state,
            country
        };

        try {
            const addAddress = await AddressModel.create(address);
            res.status(200).send({ message: "Endereço adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }


    static async list(req:Request, res:Response) {
        try {
            const listOfClients = await AddressModel.find({});
            res.status(200).send(listOfClients)
            return
        } catch (err) {
            console.info(err)
        }
    }

    static async clientAddresses(req: Request, res: Response) {
        const { referenceId, referenceType } = req.params;
        console.info(req.params)
        try {
            const listOfAddresses = await AddressModel.find({ referenceId, referenceType });
            console.info(listOfAddresses)
            res.status(200).send(listOfAddresses)
            return
        } catch (err) {
            console.info(err)
        }
    }

    
}
