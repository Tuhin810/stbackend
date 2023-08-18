import CompanyModel from "../../model/company/CompanySchema"

export const getCompanyByName =async (name:string) => {
    const company = await CompanyModel.find({name:name});
    return company;
}