import express from "express";
import { GlassesData } from "../Models/Spectacles.model.js";
const SpecRoute = express();

SpecRoute.post("/GlassesData", async (req, res) => {
  try {
    const GlassesProduct = new GlassesData(req.body);
    console.log("Debugging Glasses data:", GlassesProduct);
    const PostGlassesProduct = await GlassesProduct.save();
    console.log(`Glassses Data Stored in Database ${PostGlassesProduct}`);
    res.status(200).send(PostGlassesProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Storing Glasses Data in DB failed", Success: false });
  }
});



SpecRoute.get("/GlassesProduct", async (req, res) => {
  try {
    
    const Fetch_Glasses_Data = await  GlassesData.find({});
    console.log("Debugginh Glasses Data:", Fetch_Glasses_Data);
    if (!Fetch_Glasses_Data) {
      res
        .status(500)
        .json({ message: "ProductIds Not Found in Database", Success: false });
    }

    res.status(200).send(Fetch_Glasses_Data);
  } catch (error) {
    res.status(500).json({ message: error.message, Success: false });
  }
});




SpecRoute.get("/GlassesProduct/:id", async (req, res) => {
  try {
    const Glassees_id = req.params.id;
    const Fetch_Glasses_Data = new GlassesData.findById(Glassees_id);
    console.log("Debugginh Glasses Data:", Fetch_Glasses_Data);
    if (!Fetch_Glasses_Data) {
      res
        .status(500)
        .json({ message: "ProductIds Not Found in Database", Success: false });
    }

    res.status(200).send(Fetch_Glasses_Data);
  } catch (error) {
    res.status(500).json({ message: error.message, Success: false });
  }
});

SpecRoute.patch("/GlassesProduct/:id", async(req, res)=>{

    try{

        const Glasses_Update_id = req.params.id
        const Glasses_Product_Update = new GlassesData.findOneAndUpdate(Glasses_Update_id)
        
        console.log(`Debugging GlasseUpdatedPorduct: ${Glasses_Product_Update}`)
        if(!Glasses_Product_Update){
          return res.status(500).json({message:"product Update Id Not Found", Success:false})
        }

        res.status(200).send(Glasses_Product_Update)        

    }catch(error){

      res.status(500).json({message:error.message, Success:false})
    }

})


SpecRoute.delete("/GlassesProduct/:id", async(req, res)=>{

  try{

    const Glasse_Product_Deletion_Id = req.params.id
    const Product_Deletion_Database = await GlassesData.findOneAndDelete(Glasse_Product_Deletion_Id)
    console.log("DebugLogs Product Deletion:", Product_Deletion_Database)

    if(!Product_Deletion_Database){
      return res.status(500).json({message:"Targeted Product Not Found To Delete Check Id", Success:false})
    }
    res.status(200).send(Product_Deletion_Database)
  }catch(error){
    res.status(500).json({message:error.message, Success:false})
  }
})





export {SpecRoute}