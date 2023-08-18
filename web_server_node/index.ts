import { json } from "body-parser";
import express, { Express } from "express";
import { authRouter } from "./src/router/users/auth/auth";
import mongoose from "mongoose";
import { companyRouter } from "./src/router/company/company";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port = process.env.PORT!;

app.use(json());

app.use([authRouter, companyRouter]);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("  Database connected 📟 "))
  .catch((err) => console.log(err))

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});