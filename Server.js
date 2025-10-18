import express from "express";
import path from "path";
const app = express();
import dotenv from "dotenv";
import { DatabaseConnection } from "./Database/Database.js";
import { Router } from "./Routers/FragranceRouter.js";
import { WomensRouter } from "./Routers/WomensWearRouter.js";
import { CafeRouterData } from "./Routers/CafeItemRouter.js";
import { SkinCareRouter } from "./Routers/SkinCareRoute.js";
import { SpecRoute } from "./Routers/SpectacleRouter.js";
import { PocketmachineRouter } from "./Routers/PocketMachineRoute.js";
import { NightWearRouter } from "./Routers/NightWearsData.js";
import { MerchantRouter } from "./Routers/MerchantRouter.js";

dotenv.config();
await DatabaseConnection();
const port = process.env.Port || 8000;

// Middleware
app.use(express.json());
app.use(Router)
app.use(WomensRouter)
app.use(CafeRouterData)
app.use(SkinCareRouter)
app.use(SpecRoute)
app.use(PocketmachineRouter)
app.use(NightWearRouter)
app.use(MerchantRouter)

// Middleware

app.listen(port, () => {
  try {
    console.log("Backend Connection is Online at this port ", port);
  } catch (error) {
    console.log("Backend Conncetion Failed");
  }
});
