import mongoose from "../../database/conn";
import { Schema } from "mongoose"; 


const IncomeModel = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },

    NfNumber: {
      type: String,
      required: false,
    },
    IssueDate: {
      type: String,
      required: false,
    },
    supplierId: { type: Schema.Types.ObjectId, ref: "supplier", required: true },
   
    freight: {
    type: Number,
    required: false,
    },
    depenses: {
      type: Number,
      required: false,
    },
    paymentConditions: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    incomeProductsId: { type: Schema.Types.ObjectId, ref: "incomeProductsModel", required: false }
  },
  {
    timestamps: true,
    // strict: false
  },
  
 
);

export default mongoose.model("income", IncomeModel);
