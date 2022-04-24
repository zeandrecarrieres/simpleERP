import mongoose from "../../database/conn";

const StockModel = new mongoose.Schema(
    {
        code: {
            type: String,
            required: false,
        },
        productQuantity: {
            type: Number,
            required: true,
        },
        productIn: {
            type: Number,
            required: true,
        },
        productOut: {
            type: Number,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        productCost: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("stock", StockModel);
