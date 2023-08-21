import express,{Request,Response} from "express";
import registerNewCompany from "../../controller/company/Registration";
import deleteCompany from "../../controller/company/DeleteCompany";
import getAllCompany from "../../controller/company/CompanyDetails";

const router = express.Router();

router.get("/company/getAllCompany",getAllCompany)
router.post("/company/register",registerNewCompany);
router.delete("/company/delete/:pid",deleteCompany);

export {router as companyRouter}