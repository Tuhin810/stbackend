"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = __importDefault(require("express"));
const Registration_1 = __importDefault(require("../../controller/company/Registration"));
const DeleteCompany_1 = __importDefault(require("../../controller/company/DeleteCompany"));
const CompanyDetails_1 = __importDefault(require("../../controller/company/CompanyDetails"));
const router = express_1.default.Router();
exports.companyRouter = router;
router.get("/company/getAllCompany", CompanyDetails_1.default);
router.post("/company/register", Registration_1.default);
router.delete("/company/delete/:pid", DeleteCompany_1.default);
