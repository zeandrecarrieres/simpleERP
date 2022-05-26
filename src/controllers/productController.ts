import { Request, Response } from "express";
import ProductModel from "../models/productModel";

let product = {};

export default class productController {
    static async product(req:any, res:any) {
        const {
            code,
            categoryId,
            name,
            description,
            unit,
            price,
            cost

        } = req.body;

        product = {
            code,
            categoryId,
            name,
            description,
            unit,
            price,
            cost
        };

        try {
            const addProduct = await ProductModel.create(product);
            res.status(200).send({ message: "Produto adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }

     static async list(req:Request, res:Response) {
        try {
            const listOfProducts = await ProductModel.find({});
            res.status(200).send(listOfProducts)
            return
        } catch (err) {
            console.info(err)
        }
     }
    
     static async profile(req: Request, res: Response) {
        const { id } = req.params
       
        try {
            const profile = await ProductModel.findOne({ id });
            // tratar ID - dever de casa
            console.info(profile)
            res.status(200).send(profile)
            return
        } catch (err) {
            console.info(err)
        }
    }

}
