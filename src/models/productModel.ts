import mongoose from "../../database/conn";

const ProductModel = new mongoose.Schema(
    {
        code: {
            type: String,
            required: false,
        },

        //criar tabela de categorias
        categoryId: { 
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        unit: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("product", ProductModel);
