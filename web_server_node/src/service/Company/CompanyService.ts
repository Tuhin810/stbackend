import mongoose from "mongoose";
import { CompanyDetails } from "../../@types/interfaces/CompanyDetails";
import CompanyModel from "../../model/company/CompanySchema"

export const getCompanyByName =async (name:string) => {
    const company = await CompanyModel.find({name:name});
    return company;
}

export const getCompanyById =async (id:mongoose.Schema.Types.ObjectId) => {
    const company = await CompanyModel.findById(id);
    return company;
}

export const getCompanyByEmail =async (email:string) => {
    const company = await CompanyModel.findOne({email:email});
    return company;
}

export const addNewCompany =async (companyDetails:CompanyDetails) => {
    const company = await CompanyModel.create(companyDetails);
    return company;
}

export const getCompanyList =async () => {
    const companyList = await CompanyModel.find({},{name:1});
    return companyList;
}
