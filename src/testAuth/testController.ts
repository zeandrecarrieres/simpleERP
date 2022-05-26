import { Request, Response } from "express";
import userModel from "../models/userModel";
import tools from "../helpers/tools";
import auth from "../auth";
import jwt from "jsonwebtoken";

export default class testController {
    static async middleware(req: Request, res: Response, next:any ) {
        if (req.headers.authorization === "admin@admin.com") next()
        else {
            Request
            res.status(200).send('Não autenticado')
            console.info(req.body)
            return
        }
    }

    static async resp(req: Request, res: Response, next:any ) {
        res.status(200).send('Passou!!!')
        return
    }

}



