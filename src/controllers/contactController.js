import ContactModel from "../models/contactModel";

let contactInfo = {};

export default class contactController {
    static async contact(req, res) {
        const {
            clientId,
            type,
            contact
        } = req.body;

        contactInfo = {
            clientId,
            type,
            contact
        };

        try {
            const addContact = await ContactModel.create(contactInfo);
            res.status(200).send({ message: "Contato adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
