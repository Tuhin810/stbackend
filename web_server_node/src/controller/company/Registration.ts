import { Request, Response } from "express";
import { CompanyDetails } from "../../@types/interfaces/CompanyDetails";
import CompanyModel from "../../model/company/CompanySchema";
import { addNewCompany, getCompanyByEmailOrPhone } from "../../service/Company/CompanyService";

//creating new company

const registerNewCompany = async (req: Request, res: Response) => {

    try {
        const companyDetails: CompanyDetails = req.body;

        if (!companyDetails.name || !companyDetails.email) {
            return res.status(422).send({
                message: "Fields are empty",
            });
        }
        const company = await getCompanyByEmailOrPhone(companyDetails.email, companyDetails.phone);
        if (company) {
            return res.status(409).send({
                message: "Already exists !!",
            });
        }
        const companyInstance = await addNewCompany(companyDetails);
        return res.status(200).send({
            message: "Company Created !!",
            data: companyInstance
        });
        throw new Error();
    } catch (e) {
        res.status(400).send({
            success: false,
            message: "Error in Registeration",
            e,
        });
    }
}

export default registerNewCompany;