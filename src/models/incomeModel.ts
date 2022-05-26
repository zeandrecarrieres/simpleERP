import mongoose from "../../database/conn";

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
    supplierId: {
      type: String,
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("income", IncomeModel);
