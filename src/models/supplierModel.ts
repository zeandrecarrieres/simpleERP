import mongoose from "../../database/conn";

const SupplierModel = new mongoose.Schema(
  {
    clientSupplier: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    fantasyName: {
      type: String,
      required: false,
    },
    cnpj: {
      type: String,
      required: false,
    },
    inscription: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("supplier", SupplierModel);
