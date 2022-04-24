import ClientModel from "../models/clientModel";

let client = {};

export default class clientController {
    static async client(req:any, res:any) {
        const {
            clientType,
            name,
            fantasyName,
            CpfCnpj,
            inscription


        } = req.body;

        client = {
            clientType,
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
}
