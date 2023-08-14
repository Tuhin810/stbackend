
const companyModel = require("../model/CompanySchema")
var slugify = require('slugify')
const fs = require("fs");
const { File } = require("buffer");

module.exports.createcompanyController = async (req, res) => {
    try {
      const { name,company_type,email,company_logo,user_phone,company_email,company_phone,worker,year,Location,Gst,licence,website,otherlinks} =
        req.fields;
      const { photo } = req.files;
      const { cv} = req.files;
      //alidation
      // switch (true) {
      //   case !name:
      //     return res.status(500).send({ error: "Name is Required" });
      //   case !Education:
      //     return res.status(500).send({ error: "Education is Required" });
      //   case !Experience:
      //     return res.status(500).send({ error: "Experience is Required" });
      //   case !phone:
      //     return res.status(500).send({ error: "phone is Required" });
      //   case photo && photo.size > 100000000:
      //     return res
      //       .status(500)
      //       .send({ error: "photo is Required and should be less then 1mb" });
      //       case cv && cv.size > 100000000:
      //     return res
      //       .status(500)
      //       .send({ error: "cv is Required and should be less then 1mb" });
      // }
  
      const companys = new companyModel({ ...req.fields, slug: slugify(company_type) });
      if (photo) {
        companys.photo.data = fs.readFileSync(photo.path);
        companys.photo.contentType = photo.type;
      }
      if (cv) {
        companys.cv.data = fs.readFileSync(cv.path);
        companys.cv.contentType = cv.type;
      }
      const user=await companyModel.findOne({email:email})

        if(user){
            return res.status(200).send({
                success: false,
                message: "Already company exists",
              })}else{
                 await companys.save();
      res.status(201).send({
        success: true,
        message: "company Created Successfully",
        companys,
      });
              }
     
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating company",
      });
    }
  };
  

  //get all companys
  module.exports.getcompanyController = async (req, res) => {
    try {
      const companys = await companyModel
        .find({})
        .populate("category")
        .select("-photo")
        .limit(12)
        .sort({ createdAt: -1 });
      res.status(200).send({
        success: true,
        counTotal: companys.length,
        message: "ALlcompanys ",
        companys,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting companys",
        error: error.message,
      });
    }
  };
  // get single company
  module.exports.getSinglecompanyController = async (req, res) => {
    try {
      const company = await companyModel
        .findOne({ email: req.params.email })
        .select("-photo")
        .populate("category");
      res.status(200).send({
        success: true,
        message: "User company Fetched",
        company,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Eror while getitng single company",
        error,
      });
    }
  };
  
  // get photo
  module.exports.companyPhotoController = async (req, res) => {
    try {
      const company = await companyModel.findById(req.params.pid).select("photo");
      if (company.photo.data) {
        res.set("Content-type", company.photo.contentType);
        return res.status(200).send(company.photo.data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr while getting photo",
        error,
      });
    }
  };
  
  //delete controller
  module.exports.deletecompanyController = async (req, res) => {
    try {
      await companyModel.findByIdAndDelete(req.params.pid).select("-photo");
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
  
//   //upate companya
  module.exports.updatecompanyController = async (req, res) => {
    try {
        const { name,company_type,email,company_logo,user_phone,company_email,company_phone,worker,year,Location,Gst,licence,website,desc,otherlinks} =
        req.fields;
      const { photo } = req.files;
      const { cv} = req.files;
      //alidation
      
  
      const companys = await companyModel.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug: slugify(company_type) },
        { new: true }
      );
      if (photo) {
        companys.photo.data = fs.readFileSync(photo.path);
        companys.photo.contentType = photo.type;
      }
      if (cv) {
        companys.cv.data = fs.readFileSync(cv.path);
        companys.cv.contentType = cv.type;
      }
      const user=await ProfileModel.findOne({email:email})
      if(user){
        return res.status(404).send({
            success: false,
            message: "Company Profile exists",
          })}else{
            await companys.save();
            res.status(201).send({
              success: true,
              message: "company Updated Successfully 👍",
              companys,
            });
          }
     
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in Updte company",
      });
    }
  };
  