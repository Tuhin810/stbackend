import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import { json } from "body-parser";

import { authUsersRouter } from "./src/router/users/auth/auth";
import { companyRouter } from "./src/router/company/company";
import { authRecruiterRouter } from "./src/router/recruiter/auth/auth";
import { loginRecruiter } from "./src/controller/recruiter/auth/Login";


dotenv.config();
const app: Express = express();
const port = process.env.PORT!;

const allowedOrigins = ['http://localhost:5174'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(json());
app.use([authUsersRouter,authRecruiterRouter, companyRouter,loginRecruiter]);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("  Database connected 📟 "))
  .catch((err) => console.log(err))


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});