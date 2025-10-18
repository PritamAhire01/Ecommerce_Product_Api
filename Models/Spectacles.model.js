import mongoose from 'mongoose'
const SpectaclesData = new mongoose.Schema({

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
      type:Number,
      required: false
      
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

    subImage:{
      type:[String],
      required:true,
    }


},{timestamps:true, timeseries:true})


export const GlassesData = mongoose.model("GlassesCollection", SpectaclesData)

