import ClientPJModel from "../models/clientPJModel";

let clientPJ = {};

export default class clientPJController {
    static async clientPJ(req, res) {
        const {
            name,
            fantasyName,
            CNPJ
        } = req.body;

        clientPJ = {
            name,
            fantasyName,
            CNPJ
        };

        try {
            const addClientPJ = await ClientPJModel.create(clientPJ);
            res.status(200).send({ message: "Cliente PJ adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
