import express from "express";
import { config } from "dotenv";
import cors from "cors";
import authRouter from "./api/routes/AuthRoutes.js";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server runnning on port ${process.env.PORT}`);
});
