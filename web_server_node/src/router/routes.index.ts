import express from "express";

const app = express();

// app.use("/auth", require("./auth/auth.routes"));

// app.use("/applicant", require("./applicant/applicant.routes"));

// app.use("/jobs", require("./jobs/jobs.routes"));

// app.use("/company", require("./company/company.routes"));

// app.use("/message", require("./message/message.routes"));

// app.use("/payment", require("./payment/payment.routes"));

app.use("/recruiter", require("./recruiter/recruiter.routes"))

module.exports = app;
