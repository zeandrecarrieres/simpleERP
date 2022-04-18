import mongoose from "../../database/conn";

const ContactModel = new mongoose.Schema(
    {
        clientId: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("contact", ContactModel);
