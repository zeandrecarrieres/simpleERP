import mongoose from "../../database/conn";

const IncomeProductModel = new mongoose.Schema(
    {
        incomeId: {
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

export default mongoose.model("incomeProduct", IncomeProductModel);
