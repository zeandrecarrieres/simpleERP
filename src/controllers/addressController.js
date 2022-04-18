import AddressModel from "../models/addressModel";

let address = {};

export default class addressController {
    static async address(req, res) {
        const {
            street,
            complement,
            district,
            zipCode,
            city,
            state,
            country

        } = req.body;

        address = {
            street,
            complement,
            district,
            zipCode,
            city,
            state,
            country
        };

        try {
            const addAddress = await AddressModel.create(address);
            res.status(200).send({ message: "Endereço adicionado" });
            return;
        } catch (err) {
            res.status(404).send({ message: "Insira todas as informações" });
            console.info(err);
            return;
        }
    }
}
