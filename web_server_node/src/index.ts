import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import { ApplicantRouter } from "./router/applicant/auth/applicant.router";
import { companyRouter } from "./router/company/company";
import { jobRouter } from "./router/jobs/jobs";
import { RecruiterRouter } from "./router/recruiter/Recruiter";
import { messageRouter } from "./router/message/Message";

dotenv.config();
const app: Express = express();
const port = process.env.PORT!;

const options: cors.CorsOptions = {
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
};

app.use(cors(options));
app.use(json());
app.use([ApplicantRouter, RecruiterRouter, companyRouter, jobRouter, messageRouter]);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("  Database connected 📟 "))
  .catch((err) => console.log(err))


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});