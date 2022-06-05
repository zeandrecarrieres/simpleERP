import mongoose from "../../database/conn";


const AuthorizationModel = new mongoose.Schema(
  {
    Id: {
      type: String,
      required: true,
    },
    accessCategory: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("authorizations", AuthorizationModel);
