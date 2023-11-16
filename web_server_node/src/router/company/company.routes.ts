import express from "express";
import registerNewCompany from "../../controller/company/Registration";
import deleteCompany from "../../controller/company/DeleteCompany";
import getAllCompany from "../../controller/company/CompanyDetails";

const router = express.Router();

router.get("/getAllCompany", getAllCompany)
router.post("/register", registerNewCompany);
router.delete("/delete/:pid", deleteCompany);

module.exports = router