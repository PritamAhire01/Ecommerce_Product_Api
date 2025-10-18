import mongoose from "mongoose";
const CafeItems = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      Required: true,
    },
    price:{
        type:Number,
        required:true,
    },
    category: {
      type: String,
      required: true,
    },

    subImage: {
      type: [String],
      required: true,
    },

    ratings: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, timeseries: true }
);

export const CafeFeatureProductData = mongoose.model("CafeProductItem", CafeItems)
