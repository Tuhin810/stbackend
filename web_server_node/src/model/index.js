"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const applicant_router_1 = require("../router/applicant/auth/applicant.router");
const auth_1 = require("../router/recruiter/auth/auth");
const company_1 = require("../router/company/company");
const jobs_1 = require("../router/jobs/jobs");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const allowedOrigins = ["http://localhost:5173"];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use((0, body_parser_1.json)());
app.use([applicant_router_1.ApplicantRouter, auth_1.authRecruiterRouter, company_1.companyRouter, jobs_1.jobRouter]);
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => console.log("  Database connected 📟 "))
    .catch((err) => console.log(err));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
