import mongoose from "../../database/conn";

const SaleModel = new mongoose.Schema(
  {
    type: {
      //coloca para distinguir venda/saida/consignado?
      type: String,
      required: true,
    },
    nfNumber: {
      type: String,
      required: false,
    },
    issueDate: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
    salesmanId: {
      //podemos usar o usuário - colocar como obrigatorio (tava dando erro)
      type: String,
      required: false,
    },
    comission: {
      type: Number,
      required: true,
    },
    freight: {
      type: Number,
      required: true,
    },
    depenses: {
      type: Number,
      required: true,
    },
    paymentConditions: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String, //seria data?
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

export default mongoose.model("sale", SaleModel);
