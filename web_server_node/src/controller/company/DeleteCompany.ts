import { Request, Response } from "express";
import { CompanyDetails } from "../../@types/interfaces/CompanyDetails";
import CompanyModel from "../../model/company/CompanySchema";

//delete company

const deleteCompany = async (req:Request, res:Response) => {
    try {
      await CompanyModel.findByIdAndDelete(req.params.pid);
      res.status(200).send({
        success: true,
        message: "company Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting company",
        error,
      });
    }
  };

export default deleteCompany;