import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import { ApplicantRouter } from "./router/applicant/auth/applicant.router";
import { authRecruiterRouter } from "./router/recruiter/auth/auth";
import { companyRouter } from "./router/company/company";
import { jobRouter } from "./router/jobs/jobs";

dotenv.config();
const app: Express = express();
const port = process.env.PORT!;

const allowedOrigins = [
  "http://localhost:5173",
  "http://192.168.1.52:5173/"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
};

app.use(cors());
app.use(json());
app.use([ApplicantRouter, authRecruiterRouter, companyRouter, jobRouter]);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("  Database connected 📟 "))
  .catch((err) => console.log(err))


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});