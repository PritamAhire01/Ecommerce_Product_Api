import mongoose from "mongoose";
const SkinCareScheam = new mongoose.Schema(
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

    
  productImage: {
      type: String,
      required: true,
    },


    subImage:{

      type:[String],
      required:true,
    }





  },
  { timeseries: true, timestamps: true }
);

export const SkinCareData = mongoose.model(
  "SkinCareCollection",
  SkinCareScheam
);
