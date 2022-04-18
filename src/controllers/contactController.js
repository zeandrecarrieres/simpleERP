import ContactModel from "../models/contactModel";

let contact = {};

export default class contactController {
    static async contact(req, res) {
        const {
            type,
            contact
        } = req.body;

        contact = {
            type,
            contact
        };

        try {
            const addContact = await ContactModel.create(contact);
            res.status(200).send({ message: "Contato adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
