import mongoose, { Schema } from "mongoose";

const PocketMachine = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    rating: {
      type: String,
    },

    tags: {
      type: [String],
      required: true,
    },

    ProductImage: {
      type: String,
      required: true,
    },

    subImage: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, timeseries: true }
);

export const PocketMachineData = new mongoose.model(
  "PockeMahchineData",
  PocketMachine
);
