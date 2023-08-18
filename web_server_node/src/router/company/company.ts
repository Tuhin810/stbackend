import express,{Request,Response} from "express";
import registerNewCompany from "../../controller/company/Registration";
import deleteCompany from "../../controller/company/DeleteCompany";

const router = express.Router();

router.post("/company/register",registerNewCompany);
router.delete("/company/delete/:pid",deleteCompany);

export {router as companyRouter}