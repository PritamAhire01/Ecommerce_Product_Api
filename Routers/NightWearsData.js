import express from "express";
import { NightWearData } from "../Models/NightWears.model.js";

const NightWearRouter = express.Router();

NightWearRouter.post("/NightWear", async (req, res) => {
  try {
    const NightProductData = await NightWearData(req.body);
    const NightproductDataSave = await NightProductData.save();
    if (!NightProductData) {
      return res
        .status(400)
        .json({ message: "Product Note Added Succesfully", Success: false });
    }

    return res.status(200).send(NightproductDataSave);
  } catch (error) {
    return res.status(500).json({ message: error.message, Success: false });
  }
});

NightWearRouter.get("/NightWear", async (req, res) => {
  try {
    const FetchNightWearProductData = await NightWearData.find({});

    if (!FetchNightWearProductData) {
      res
        .status(500)
        .json({ message: "Product Id Not Found in Databses", Success: false });
    }

    res.status(201).send(FetchNightWearProductData);

    console.log("Debug Fetching Data".FetchNightWearProductData);
  } catch (error) {
    res.status(500).json({ message: error.message, Success: false });
  }
});

NightWearRouter.get("/NightWear/:id", async (req, res) => {
  try {
    const FetchDataId = req.params.id;
    const NightWearProductData = await NightWearData.findById(FetchDataId);
    console.log("Debugging FetchNightWearProductData:", NightWearProductData);
    if (!NightWearProductData) {
      return res
        .status(500)
        .json({ message: "product Not Found On this Id", Success: false });
    }
    res.status(200).send(NightWearProductData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Success: false });
  }
});

NightWearRouter.patch("/NightWear", async (req, res) => {
  try {

    const UpdateId = req.params.id
    const UpadateProductData = await NightWearData.findByIdAndUpdate(UpdateId)
    console.log("Upadted Product Debugginh", UpadateProductData)
    if(!UpadateProductData){
      
      return res.status(500).json({message:"failed To Update Product Data", Success:false})
    }
    

  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal Server Error", Success: false });
  }
});


NightWearRouter.delete("/NightWear", async(req, res)=>{
  try{

    const ProductDeleteId =  req.params.id
    const DeletionProductItems = await NightWearData.findByIdAndDelete(ProductDeleteId)
    
    console.log("Product Delete Succefull", DeletionProductItems)


    if(!DeletionProductItems){
      return res.status(500).json({message:"product Deletion Failed", Success:false})
    }

  }catch(error){
    return res.status(500).json({message:error.message, Success:false})
  }
})



export { NightWearRouter };
