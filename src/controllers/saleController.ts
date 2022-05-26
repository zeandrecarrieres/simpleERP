import { Request, Response } from "express";
import SaleProductsModel from "../models/SaleProductsModel";

let sale = {};

export default class saleController {
    static async sale(req:any, res:any) {
        const {
            type,
            NfNumber,
            IssueDate,
            clientId,
            SalesmanId,
            Comission,
            freight,
            depenses,
            paymentConditions, 
            dueDate,
            paymentMethod

        } = req.body;

        sale = {
            type,
            NfNumber,
            IssueDate,
            clientId,
            SalesmanId,
            Comission,
            freight,
            depenses,
            paymentConditions,
            dueDate,
            paymentMethod
        };

        try {
            const addSale = await SaleProductsModel.create(sale);
            res.status(200).send({ message: "Venda adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }

    
      static async list(req:Request, res:Response) {
        try {
            const listOfSales = await SaleProductsModel.find({});
            res.status(200).send(listOfSales)
            return
        } catch (err) {
            console.info(err)
        }
      }
    
    static async detail(req: Request, res: Response) {
        const { id } = req.params
       
        try {
            const detail = await SaleProductsModel.findOne({ id });
            // tratar ID - dever de casa
            console.info(detail)
            res.status(200).send(detail)
            return
        } catch (err) {
            console.info(err)
        }
    }


}
