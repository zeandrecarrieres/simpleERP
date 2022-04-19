import mongoose from "../../database/conn";

const SaleProductModel = new mongoose.Schema(
    {
        saleId: {
            type: String,
            required: true,
        },
        productId: {
            type: String,
            required: true
        },
        productQuantity: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            required: false
        },
        value: {
            type: Number,
            required: true,
        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("saleProduct", SaleProductModel);
