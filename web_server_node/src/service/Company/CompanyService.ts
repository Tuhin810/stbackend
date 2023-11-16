import { CompanyDetails } from "../../@types/interfaces/CompanyDetails";
import CompanyModel from "../../model/company/CompanySchema"

export const getCompanyByName = async (name: string) => {
    try {
        const company = await CompanyModel.find({ name: name });
        return company;
    } catch (error) {
        throw error;
    }
}

export const getCompanyById = async (id: string) => {
    try {
        const company = await CompanyModel.findById(id);
        return company;
    } catch (error) {
        throw error;
    }
}

export const getCompanyByEmailOrPhone = async (email: string, phone: number) => {
    try {
        const companyByMail = await CompanyModel.findOne({ email: email });
        if (companyByMail) {
            return companyByMail;
        }
        const companyByPhone = await CompanyModel.findOne({ phone: phone });
        return companyByPhone;
    }
    catch (error) {
        throw error;
    }
}

export const addNewCompany = async (companyDetails: CompanyDetails) => {
    try {
        const company = await CompanyModel.create(companyDetails);
        return company;
    }
    catch (error) {
        throw error;
    }
}

export const getCompanyList = async () => {
    try {
        const companyList = await CompanyModel.find({}, { name: 1 });
        return companyList;
    }
    catch (error) {
        throw error;
    }
}
