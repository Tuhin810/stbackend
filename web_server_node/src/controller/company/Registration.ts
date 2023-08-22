import { Request, Response } from "express";
import { CompanyDetails } from "../../@types/interfaces/CompanyDetails";
import CompanyModel from "../../model/company/CompanySchema";
import { addNewCompany, getCompanyByEmail } from "../../service/Company/CompanyService";

//creating new company

const registerNewCompany =async (req:Request,res:Response) => {
    
    const companyDetails:CompanyDetails=req.body;

    if(!companyDetails.name || !companyDetails.email || !companyDetails.website){
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else{
        try {
            const company = await getCompanyByEmail(companyDetails.email);
            console.log(company);
            
            if (company) {
                console.log(company);
                return res.status(409).send({
                    success: false,
                    message: "Already exists !!",
                });
            } else {
                addNewCompany(companyDetails)
                    .then((data) => {
                        const companyDetails:CompanyDetails=data;
                        res.status(200).send({
                            success: true,
                            message: "Company Registered Successfully",
                            company:companyDetails
                        });
                    })
    
            }
        } catch (e) {
            res.status(500).send({
                success: false,
                message: "Errro in Registeration",
                e,
            });
        }
    }
}

export default registerNewCompany;