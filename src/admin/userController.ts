import { Request, Response } from "express";
import userModel from "../models/userModel";
import tools from "../helpers/tools";
import auth from "../auth";
import jwt from "jsonwebtoken";

export default class userController {
  //++++++++++++++++++++ User Create +++++++++++++++++++++++++++++++++++
  static async create(req: any, res: any) {
    const { name, email, password, access } = req.body;
    console.info(req.body);
    // Validações (usuário e senha)
    if (!name || !email || !password || !access) {
      res.status(403).send({ message: "Dados inválidos!" });
      return;
    }
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      res.status(403).send({ message: "Email inválido!" });
      return;
    }
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      res
        .status(403)
        .send({ message: "Este email já está cadastrado em nossos sistemas!" });
      return;
    }

    if (password.length <= 6) {
      res.status(403).send({ message: "Password curta!" });
      return;
    }
    const hashPassword = await tools.createPassword(password);
    // Inserindo usuários no BD
    const usuario = { name, email, password: hashPassword, access };
    try {
      const created = await userModel.create(usuario);
      res.status(200).send({ message: "Criado Usuário", created });
      console.info("p", created);
    } catch (err) {
      console.info(err);
    }
  }
  //++++++++++++++++++++ User Login +++++++++++++++++++++++++++++++++++
  static async login(req: any, res: any) {
    const { email, password } = req.body;
    // Validações (usuário e senha)
    if (!email || !password) {
      res.status(403).send({ message: "Dados inválidos!" });
      return;
    }

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      res.status(403).send({ message: "Email inválido!" });
      return;
    }

    const userExists = await userModel.findOne({ email });
    // console.info(userExists);
    // console.info(email);
    if (userExists) {
      const validatePassword = await tools.validatePassword(
        password,
        userExists.password
      );
      if (!validatePassword) {
        res.status(403).send({ message: "Dados inválidos!" });
        return;
      }
    }
    const userId = userExists._id;
    const userEmail = userExists.email;
    const userName = userExists.name;

    const secretKey = process.env.SECRET;
    const options = { userId, userEmail, userName };

    const token = jwt.sign(options, secretKey!, {expiresIn:"24h"});
    req.headers["Authorization"] = "Bearer " + token;
    req.userId = userExists._id;
    req.userName = userExists.name;
    req.userEmail = userExists.email;
    console.info(req.headers);
    userExists.password = null
    res.status(200).send({ message: "Logado!", user: userExists, token });
    return;
  }

  static async upDatePassword(req: any, res: any) {
    res.status(200).send({ message: "Senha alterada!" });
    return;
  }

  static async logout(req: any, res: any) {
    req.headers["Authorization"] = "";
    req.userId = null;
    req.userName = null;
    req.userEmail = null;
    console.info(req.headers);
    res.status(200).send({ message: "Logout efetuado com sucesso!" });
    return;
  }
  //++++++++++++++++++++ User List +++++++++++++++++++++++++++++++++++

  static async list(req:Request, res:Response) {
        try {
            const listOfUsers = await userModel.find({});
            res.status(200).send(listOfUsers)
            return
        } catch (err) {
            console.info(err)
        }
    }

  //++++++++++++++++++++ User Profile +++++++++++++++++++++++++++++++++++

 static async profile(req: Request, res: Response) {
        const { id } = req.params
       
        try {
            const profile = await userModel.findOne({ id });
            // tratar ID - dever de casa
            console.info(profile)
            res.status(200).send(profile)
            return
        } catch (err) {
            console.info(err)
        }
    }


}
