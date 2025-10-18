import express from "express";
const WomensRouter = express.Router();

import { WomesWearCollcetions } from "../Models/WomesWear.model.js";

WomensRouter.post("/WomensWearCollcetion", async (req, res) => {
  try {
    const WomensWear_Api_Data = new WomesWearCollcetions(req.body);
    console.log("👉 Incoming Body:", req.body); // Debug log

    console.log(
      "Debuggin Console WomesWearCollecitonData:",
      WomensWear_Api_Data
    );

    const WomensWear_Mongo_Data = await WomensWear_Api_Data.save();

    console.log(
      "Debugging WomesWearcollection Saved in Database:",
      WomensWear_Mongo_Data
    );

    res.send(WomensWear_Mongo_Data);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Encounterd2 Erro while Posting Data in Db", error });
  }
});

WomensRouter.get("/WomensWearCollcetion", async (req, res) => {
  try {
    const Get_Womens_Wear_Api_Data = await  WomesWearCollcetions.find({});
    res.status(200).send(Get_Womens_Wear_Api_Data);
    console.log("Get request Data procced:", Get_Womens_Wear_Api_Data);
  } catch (Error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

WomensRouter.get("/WomensWearCollcetion/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const Get_Product_id = await WomesWearCollcetions.findById(_id);
    if (!Get_Product_id) {
      res.status(500).json({ message: "Porduct id Not Found" });
    }
    console.log("Debug check GettingProductId:", Get_Product_id);

    res.status(200).json(Get_Product_id);
  } catch (error) {
    res.status(500).json({ message: "product Not Found " });
  }
});

// Api Upadets

WomensRouter.patch("/WomensWearCollcetion/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const UpdateWomensWearData = await WomesWearCollcetions.findByIdAndUpdate(
      _id
    );

    console.log(UpdateWomensWearData);

    if (!UpdateWomensWearData) {
      res.status(500).json({ message: "Product Not Found" });
    } else {
      res.status(200).json(UpdateWomensWearData);
    }
  } catch (error) {
    res.status(505).json({ message: "Internal server Error" });
  }
});

// Ab yaar yaha pe main product ko Delete karunmga thik hain haannji

WomensRouter.delete("/WomensWearCollcetion/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const DeleteProduct = await WomesWearCollcetions.findOneAndDelete(_id);

    console.log(DeleteProduct);
    if (!DeleteProduct) {
      res.status(500).json({ message: "Deletion of Product isnt sucessfull" });
    } else {
      res.status(500).json(DeleteProduct);
    }
  } catch (Error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { WomensRouter };
