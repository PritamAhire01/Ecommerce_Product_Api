import mongoose from "mongoose";
const FragranceSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

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
    coverimage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: false,
    },

    rating: {
      type: String,
      // required: true,
    },

    tags: {
      type: [String],
      required: true,
    },

    ProductImage: {
      type: String,
      required: true,
    },
  },
  { timeseries: true, timestamps: true }
);

const FragranceApiData = mongoose.model("FragranceCollection", FragranceSchema);

export { FragranceApiData };
