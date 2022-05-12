import { Request, Response } from "express";
import TransactionProductModel from "../models/transactionProductModel";

let transactionProduct = {};

export default class transactionsController {
    static async transactionProducts(req:any, res:any) {
        const {
            transactionId,
            productId,
            productQuantity,
            discount,
            value

        } = req.body;

        transactionProduct = {
         transactionId,
            productId,
            productQuantity,
            discount,
            value
        };

        try {
            const addProduct = await TransactionProductModel.create(transactionProduct);
            res.status(200).send({ message: "Produto da transação adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }


    // static async list(req:Request, res:Response) {
    //     try {
    //         const listOfClients = await TransactionProductModel.find({});
    //         res.status(200).send(listOfClients)
    //         return
    //     } catch (err) {
    //         console.info(err)
    //     }
    // }

    // static async transactionProducts(req: Request, res: Response) {
    //     const { transactionId, transactionType } = req.params;
    //     console.info(req.params)
    //     try {
    //         const listOfProducts = await TransactionProductModel.find({ transactionId, transactionType });
    //         console.info(listOfProducts)
    //         res.status(200).send(listOfProducts)
    //         return
    //     } catch (err) {
    //         console.info(err)
    //     }
    // }

    //   static async supplierAddresses(req: Request, res: Response) {
    //     const { referenceId, referenceType } = req.params;
    //     console.info(req.params)
    //     try {
    //         const listOfAddresses = await TransactionProductModel.find({ referenceId, referenceType });
    //         console.info(listOfAddresses)
    //         res.status(200).send(listOfAddresses)
    //         return
    //     } catch (err) {
    //         console.info(err)
    //     }
    // }

    
}
