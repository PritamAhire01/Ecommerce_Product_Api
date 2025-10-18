import express from "express";
import { MerchnadiseProduct } from "../Models/merchandise.model.js";
const MerchantRouter = express.Router();

MerchantRouter.post("/Merchandise", async (req, res) => {
  try {
    const MerchantProductData = new MerchnadiseProduct(req.body);

    const MerchantProductDataStore = await MerchantProductData.save();

    if (!MerchantProductData) {
      res.status(500).json({
        message: "Inertion Product in Database failed",
        Success: false,
      });
    }

    res.status(201).send(MerchantProductDataStore);

    console.log(
      "Debugging, Merchandise ProductAdded:",
      MerchantProductDataStore
    );
  } catch (error) {
    res.status(500).json({ message: error.message, Success: false });
  }
});

MerchantRouter.get("/Merchandise", async (req, res) => {
  try {
    
    const FetchMerchantProductData = await MerchnadiseProduct.find({});
    if (!FetchMerchantProductData) {
      res.status(401).json({ message: "Product Not Found", Success: false });
    }

    res.status(200).send(FetchMerchantProductData);

    console.log("Debugging FetchedDataId", FetchMerchantProductData);
  } catch (error) {
    res.status(500).json({ message: error.message, Success: false });
  }
});

MerchantRouter.get("/Merchandise/:id", async (req, res) => {
  try {
    const Merchant_Product_Id = req.params.id;
    const FetchedMerchantProductData = await MerchnadiseProduct.findById(
      Merchant_Product_Id
    );

    if (!FetchedMerchantProductData) {
      return res.status(401).json({
        message: "product Id Not Found Database and Fetching Failed",
        Success: false,
      });
    }

    console.log(
      "Debugging Merchant-Product-Fetched-Data",
      FetchedMerchantProductData
    );

    return res.status(201).send(FetchedMerchantProductData);
  } catch (error) {
    return res.status(500).json({ message: error.message, Success: false });
  }
});


MerchantRouter.patch("/Merchandise", async (req, res) => {
  try {
    const UpdateProductDataId = req.params.id;
    const UpadetProductData = await MerchnadiseProduct.findByIdAndUpdate(
      UpdateProductDataId,
      req.body
    );
    if (!UpdateProductDataId) {
      return res
        .status(500)
        .json({ message: "Failed To Update the Product", Success: false });
    }

    console.log("Debugginh Updating Product Data", UpadetProductData);
    return res.status(201).send(UpadetProductData);
  } catch (error) {
    return res.status(500).json({ message: error.message, Success: false });
  }
});

// Backend Api delete functionlaity()s

MerchantRouter.delete("/Merchandise", async (req, res) => {
  
  
  try {
    const MerchanyProductDeletionId = req.params.id;
    const MerchDeletedProductData = await MerchnadiseProduct.findByIdAndDelete(
      MerchanyProductDeletionId
    );

    if (!MerchDeletedProductData) {
      return res.status(500).json({ message: error.message, Success: false });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, Success: false });
  }
});

export { MerchantRouter };








