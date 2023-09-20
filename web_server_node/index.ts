import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";

import { companyRouter } from "./src/router/company/company";
import { authRecruiterRouter } from "./src/router/recruiter/auth/auth";
import { jobRouter } from "./src/router/jobs/jobs";
import { ApplicantRouter } from "./src/router/applicant/auth/applicant.router";


dotenv.config();
const app: Express = express();
const port = process.env.PORT!;

const allowedOrigins = ["http://localhost:5173", "http://192.168.1.52:5173/", "http://starmarks.in.s3-website.ap-south-1.amazonaws.com/"];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(json());
app.use([ApplicantRouter, authRecruiterRouter, companyRouter, jobRouter]);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("  Database connected 📟 "))
  .catch((err) => console.log(err))


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});