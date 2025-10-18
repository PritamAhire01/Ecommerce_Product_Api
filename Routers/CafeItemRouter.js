import express from "express";
const CafeRouterData = express.Router();
import { CafeFeatureProductData } from "../Models/CafeItems.model.js";

// Ab yaar yaha pe main Data Ko post kara thik hain

CafeRouterData.post("/CafeItems", async (req, res) => {
  try {
    const CafeProductsApi = new CafeFeatureProductData(req.body);
    console.log("👉 Incoming Body:", req.body); // Debug log

    console.log(
      "Debuggin Console WomesWearCollecitonData:",
CafeProductsApi
    );

    const CafePorductData = await CafeProductsApi.save();
    res.send(CafePorductData);
    console.log("Debugging", CafePorductData);
    res.status(200).json({ message: "Sucessfull" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

// Av yaar yahape main Data ko  yaar main get requiest banunga thik hain

CafeRouterData.get("/CafeItems", async (req, res) => {
  try {
    const GetCafeitemsData = await CafeFeatureProductData.find({});
    console.log("Fetchde Data for Debugging", GetCafeitemsData);
    // res.status(200).json({ message: "SucessFull" });
    res.status(201).send(GetCafeitemsData)
  } catch (error) {
    res.status(500).json({ message: "Product Not Found" });
  }
});

// get() by Id DataFecthing

CafeRouterData.get("/CafeItems/:id", async (req, res) => {
  try {
    const GetCafeItemId = req.params.id;
    const GetCafeDataById = new CafeFeatureProductData.findById(GetCafeItemId);
    if (!GetCafeDataById) {
      res.status(500).json({ message: "Product Id Not Found" });

      console.log("Porduct Id Not Found");
    } else {
      res.status(200).json({ message: "Product Id Found" });
      console.log("Porduct Id Finall Found", GetCafeDataById);
    }
  } catch (error) {
    res.status(500).json({ message: "ProductId Not Found" });
  }
});

CafeRouterData.patch("/CafeItems/:id", async (req, res) => {
  try {
    const ProductId = req.params.id;
    const UpdateProductId = new CafeFeatureProductData.findByIdAndUpdate(
      ProductId
    );
    if (!UpdateProductId) {
      res.status(500).json({ message: "Porduct Id Not Found Plaese Chaeck" });

      console.log("Id Not Found Update Failed");
    } else {
      res.status(200).json({ message: "Product Id Found and Updates" });
      console.log("Product Id Found and Upaated SucessFullt", UpdateProductId);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

CafeRouterData.delete(".CafeItems/:id", async (req, res) => {
  try {
    const DeleeteCafeproductDataId = req.params.id;
    const DeleteCafeProductData = new CafeFeatureProductData.findOneAndDelete(
      DeleeteCafeproductDataId
    );

    if (!DeleteCafeProductData) {
      res.status(500).json({ message: "Product Id Not Found To Delet it" });
    } else {
      res
        .status(200)
        .json({ message: "Porduct Id Found Sucessfully and Deleted it" });

      console.log("Product SucessFully Deleted", DeleteCafeProductData);
    }
  } catch (error) {
    res.status(500).json({ mesagge: "Internal Server Error" });
  }
});


export {CafeRouterData}