import mongoose from "../../database/conn";
import { Schema } from "mongoose"; 

const UserAuthorizationModel = new mongoose.Schema(
  {
    userId: {type: Schema.Types.ObjectId,ref:"users"},
    
    authorizationId:  {type: Schema.Types.ObjectId,ref:"authorizations"},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Userauthorization", UserAuthorizationModel);