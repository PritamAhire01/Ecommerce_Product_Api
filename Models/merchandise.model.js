import mongoose, { Schema } from "mongoose";

const Merchandise = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },
    
    description:{
        type:String,
        required:true,
    },

    price: {
      type: Number,
      required: true,
    },

    Category: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      required:true,
    },

    CoverImages: {
      type: String,
      required: true,
    },

    ProductImages: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, timeseries: true }
);

export const MerchnadiseProduct = new mongoose.model(
  "MerchantProduct",
  Merchandise
);

// name, brand, price, Category, tags, productImages, CoverImages;
