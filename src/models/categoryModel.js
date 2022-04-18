import mongoose from "../../database/conn";

const CategoryModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("category", CategoryModel);
