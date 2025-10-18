import { PocketMachineData } from "../Models/PocketMachine.model.js";
import express from "express";

const PocketmachineRouter = express.Router();

PocketmachineRouter.post("/PocketMachine", async (req, res) => {
  try {
    const PocketMachinProductData = new PocketMachineData(req.body);
    const PocketData = await PocketMachinProductData.save();

    console.log(`PockeMachineProduct Here DebugLogs: ${PocketData}`);

    if (!PocketData) {
      return res
        .status(500)
        .json({ message: "Product Id Not Found", Succcess: false });
    }

    res.status(200).send(PocketData);
  } catch (error) {
    console.log("Pocketmachine Debug", error);
    return res.status(500).json({ message: error.message, Succcess: false });
  }
});

PocketmachineRouter.get("/PocketMachine", async (req, res) => {
  try {
    const FetchedPocketMachineData = await PocketMachineData.find({});
    console.log(
      "PocketMachineData Fetched Here Please check",
      FetchedPocketMachineData
    );

    if (!FetchedPocketMachineData) {
      return res
        .status(500)
        .json({ message: "internal Server Error", Succcess: false });
    }

    res.status(200).send(FetchedPocketMachineData)
  } catch (error) {
    return res.status(500).json({ message: error.message, Succcess: false });
  }
});

PocketmachineRouter.get("/PocketMachine/:id", async (req, res) => {
  try {
    const PocketMachine_Id = req.params.id;

    const FetchingPocketMachineData = new PocketMachineData.findById(
      PocketMachine_Id
    );

    if (!FetchingPocketMachineData) {
      res
        .status(400)
        .json({ message: "product id Not Found", Succcess: false });
    }

    console.log("Fecth_Product_Debugging:", FetchingPocketMachineData);
    res.status(200).send(FetchingPocketMachineData);
  } catch (error) {
    res.status(500).json({ message: error, Succcess: false });
  }
});

PocketmachineRouter.patch("/PocketMachine/:id", async (req, res) => {
  try {
    const UpdateProductId = req.params.id;
    const UpdatingPocketMachineDataProducts =
      new PocketMachineData.findOneAndUpdate(UpdateProductId);

    console.log(
      "Debugging Update ProductData:",
      UpdatingPocketMachineDataProducts
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", Succcess: false });

    console.log("Debuggin backend Update Datra Functionlaity:", error);
  }
});

PocketmachineRouter.delete("/PocketMachine/:id", async (req, res) => {
  try {
    const DeleteProductData = req.params.id;
    const UpdateDeletedProductData = new PocketMachineData.findOneAnddelete(
      DeleteProductData
    );

    if (!UpdateDeletedProductData) {
      return res.status(500).json({
        message: "product Id For Deletion Not Found",
        Succcess: false,
      });
    }

    console.log("Debuggin the DeleteProdcutData", UpdateDeletedProductData);

    res.status(200).send(UpdateDeletedProductData);
  } catch (error) {
    res.status(500).json({ message: error.message, Succcess: false });
  }
});

export { PocketmachineRouter };
