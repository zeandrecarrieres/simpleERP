import mongoose from "../../database/conn";

const SaleModel = new mongoose.Schema(
    {
        clientId: {
            type: String,
            required: true,
        },
        salerId: {
            type: String,
            required: true,
        },


    },
    {
        timestamps: true,
    }
);

export default mongoose.model("sale", SaleModel);
