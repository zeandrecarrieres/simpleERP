import { Request, Response } from "express";
import IncomeModel from "../models/incomeModel";
import supplierModel from "../models/supplierModel";



let income = {};

export default class incomeController {
    static async income(req:any, res:any) {
        const {
            type,
            NfNumber,
            IssueDate,
            supplierId,
            freight,
            depenses,
            paymentConditions,
            dueDate,
            paymentMethod
            

        } = req.body;

        income = { 
            type,
            NfNumber,
            IssueDate,
            supplierId,
            freight,
            depenses,
            paymentConditions,
            dueDate,
            paymentMethod
        };

        try {
            const addIncome = await IncomeModel.create(income);
            res.status(200).send({ message: "Entrada adicionada" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }


      static async list(req:Request, res:Response) {
        try {
            // const listOfIncomes = await IncomeModel.find({})
             const listOfIncomes = await IncomeModel.find({}).populate('supplierId').setOptions({strictQuery: false})
            console.log(listOfIncomes)
            res.status(200).send(listOfIncomes)
            return
        } catch (err) {
            console.info(err)
        }
      }
    
    static async detail(req: Request, res: Response) {
        const { _id } = req.params
       
        try {
            const detail = await IncomeModel.findOne({ _id });
            // tratar ID - dever de casa
            console.info(detail)
            res.status(200).send(detail)
            return
        } catch (err) {
            console.info(err)
        }
    }
    
}
