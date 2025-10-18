import Express from "express";
const SkinCareRouter = Express();

// Backend Shcema Model

import { SkinCareData } from "../Models/SkinCare.model.js";
import { setDriver } from "mongoose";

// PostRoute

SkinCareRouter.post("/SkinCare", async (req, res) => {
  try {
    const SkinCareProduct = new SkinCareData(req.body);
    console.log(`Debugginh SkinCare Product ${SkinCareProduct}`);

    const SaveSkinCareProduct = await SkinCareProduct.save();

    console.log(`Debugginh:Product Save in Database ${SaveSkinCareProduct}`);

    res.send(SaveSkinCareProduct);
  } catch (error) {
    console.log("Debugging : SomeError Occured", error);
    res.status(500).json({ message: error.message, Sucess: false });
  }
});

SkinCareRouter.get("/SkinCare", async (req, res) => {
  try {
    const GetSkinCareData = await SkinCareData.find({});
    console.log("Debugging Fetching SkinCareData", GetSkinCareData);
    res.status(200).send(GetSkinCareData);
  } catch (error) {
    res.status(500).json({ message: error.message, Sucess: false });
  }
});

SkinCareRouter.get("/SkinCare/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const FetchSkinCareDataId = new SkinCareData.findById(_id);
    if (!FetchSkinCareDataId) {
      res.status(500).json({ message: "product Id Not Found", Sucess: false });
    }
    res.status(200).send(FetchSkinCareDataId);
    console.log(`Debugging Data SkinCareProduct:${FetchSkinCareDataId}`);
  } catch (error) {
    res.status(500).json({ message: error.message, Sucess: false });
  }
});

SkinCareRouter.path("/SkinCare/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UpdateSkinCareProduct = new SkinCareData.findOneAndUpdate(_id);
    console.log(
      "Debugging : Update Data fetch through _id",
      UpdateSkinCareProduct
    );
    if (!UpdateSkinCareProduct) {
      res
        .status(500)
        .json({ message: "Id Not Found Can't Update", Sucess: false });
    }

    res.status(200).send(UpdateSkinCareProduct);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", Success: false });
  }
});

SkinCareRouter.delete("/SkinCare/:id", async (req, res) => {
  try {
    const Delete_Id = req.params.id;
    const Delete_Id_Data = new SkinCareData.findOneAndDelete(Delete_Id);
    console.log("Debuggin Delete Functionlaity:", Delete_Id_Data);
    if (!Delete_Id_Data) {
      res.status(500).json({ message: "failes Deletion", Success: false });
    }
    res.status(200).send(Delete_Id_Data);
  } catch (error) {
    res.status(500).json({ message: error.message, Sucess: false });
  }
});

export { SkinCareRouter };
