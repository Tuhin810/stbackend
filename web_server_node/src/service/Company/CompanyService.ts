import CompanyModel from "../../model/company/CompanySchema"

export const getCompanyByName =async (name:string) => {
    const company = await CompanyModel.find({name:name});
    return company;
}

export const getCompanyById =async (id:string) => {
    const company = await CompanyModel.findById(id);
    return company;
}