import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
const WomensWearCollection = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
      trim: true,
      default:"pritam",
    },

    brand: {
      type: String,
      required: true,
      trim: true,
      default:"devika",
    },

    description: {
      type: String,
      required: true,
      trim: true,
      default:"kaise ho",
    },

    price: {
      type: Number,
      required: false,
    },

    rating: {
      type: String,
      default:0,
    },

    category:{
      type:String,
      required:true,
      default:"",
    },

    tags: {
      type: [String],
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },

    subImage: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true, timeseries: true }
);

const WomesWearCollcetions = mongoose.model(
  "WomensCollection",
  WomensWearCollection
);

export { WomesWearCollcetions };

// Dresses 15

// Tops15

// T-shirts 15

// Shirts & Blouses 15

// Kurtis 15

// Tunics 15

// Saree 15

// Salwar Suits 15

// Lehenga Cholis 15
