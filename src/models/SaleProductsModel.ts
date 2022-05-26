import mongoose from "../../database/conn";

const SalesProductsModel = new mongoose.Schema(
    {
        transactionId: {
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
        },
         subTotal: {
            type: Number,
            required: false,
        },
          productname: {
            type: String,
            required: false,
        },


    },
    {
        timestamps: true,
    }
);

export default mongoose.model("salesProductsModel", SalesProductsModel);
