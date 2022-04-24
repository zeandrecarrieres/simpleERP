import mongoose from "../../database/conn";

const IncomeModel = new mongoose.Schema(
    {
        supplierId: {
            type: String,
            required: true,
        },
        vendorName: {
            type: String,
            required: true,
        },


    },
    {
        timestamps: true,
    }
);

export default mongoose.model("income", IncomeModel);
