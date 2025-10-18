import express from "express";
const Router = express.Router();
import { FragranceApiData } from "../Models/Fragrance.model.js";

Router.post("/Fragrance", (req, res) => {
  try {
    const Api_Data = new FragranceApiData(req.body);
    console.log("This is Data :", Api_Data);
    const get_Api_Data = Api_Data.save();
    res.send(get_Api_Data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get-requese-all

Router.get("/Fragrance", async (req, res) => {
  try {
    const Get_Data_Api = await FragranceApiData.find({});
    res.status(201).send(Get_Data_Api);
  } catch (error) {
    res.status(400).send(error);
    console.log("show me bug", error);
  }
});

// get-Rrequest-by-id

Router.get("/Fragrance/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const product = await FragranceApiData.findById(_id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Upade-Data-request

Router.patch("/Fragrance/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const Frag_Porduct_Upadate = await FragranceApiData.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    if (!Frag_Porduct_Upadate) {
      return res.status(404).json({ error: "PorductNot Found" });
    }
    res.status(200).json(Frag_Porduct_Upadate);
  } catch (error) {
    console.error("Error Fetching Data Pइorducts", error);
    res.status(500).json({ error: "Inetrnal Server Error" });
  }
});

// Deelte-req-Data

Router.delete("/Fragrance/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const Frag_Porduct_Upadate = await FragranceApiData.findByIdAndDelete(_id);
    if (!Frag_Porduct_Upadate) {
      return res.status(404).json({ error: "PorductNot Found" });
    }
    res.status(200).json(Frag_Porduct_Upadate);
  } catch (error) {
    console.error("Error Fetching Data Prorducts", error);
    res.status(500).json({ error: "Inetrnal Server Error" });
  }
});

export { Router };
