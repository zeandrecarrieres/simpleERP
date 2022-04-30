import mongoose from "../../database/conn";

const UserModel = new mongoose.Schema(
  {
      name: {
      type: String,
      required: true
    },
     email: {
      type: String,
      required: true,
          },
    password: {
      type: String,
      required: true
    },
    access: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("users", UserModel);