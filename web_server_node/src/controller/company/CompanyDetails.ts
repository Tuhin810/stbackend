import { Request, Response } from "express";
import {  getCompanyList } from "../../service/Company/CompanyService";

//creating new company

const getAllCompany =async (req:Request,res:Response) => {
    
        try {
            const companyList = await getCompanyList()
                    .then((data) => {
                        res.status(200).send({
                            success: true,
                            message: "Company Registered Successfully",
                            company:data
                        });
                    })
    
            }
         catch (e) {
            res.status(500).send({
                success: false,
                message: "Error to get company list",
                e,
            });
        }
    
}

export default getAllCompany;