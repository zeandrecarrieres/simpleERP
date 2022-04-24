import AddressModel from "../models/addressModel";

let address = {};

export default class addressController {
    static async address(req:any, res:any) {
        const {
            referenceId,
            type,
            street,
            number,
            complement,
            district,
            zipCode,
            city,
            state,
            country

        } = req.body;

        address = {
            referenceId,
            type,
            street,
            number,
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
