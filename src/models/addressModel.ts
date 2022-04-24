import mongoose from "../../database/conn";

const AddressModel = new mongoose.Schema(
  {
    referenceId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: false,
    },
    complement: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("address", AddressModel);
