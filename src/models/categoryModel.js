import mongoose from "../../database/conn";

const CategoryModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("category", CategoryModel);
