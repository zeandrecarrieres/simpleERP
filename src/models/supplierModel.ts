import mongoose from "../../database/conn";

const SupplierModel = new mongoose.Schema(
  {
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
