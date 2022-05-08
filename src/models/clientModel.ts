import mongoose from "../../database/conn";

const ClientModel = new mongoose.Schema(
    {
        clientSupplier: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        fantasyName: {
            type: String,
            required: false
        },
        CpfCnpj: {
            type: String,
            required: false
        },
        inscription: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("client", ClientModel);
