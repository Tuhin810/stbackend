
const jobpostModel = require("../model/JobSchema")
var slugify = require('slugify')
const fs = require("fs");
const { File } = require("buffer");

module.exports.createjobpostController = async (req, res) => {
    try {
      const {company_name,job_type,email,user_phone,company_email,company_phone,Location,work,year,website,otherlinks,job_role,skill,spoken_english,salary,duty_hours,freshers_allowed,age_limit,qualification,job_expire,employment_type, } =
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
  
      const jobposts = new jobpostModel({ ...req.fields, slug: slugify(job_type) });
      if (photo) {
        jobposts.photo.data = fs.readFileSync(photo.path);
        jobposts.photo.contentType = photo.type;
      }
      if (cv) {
        jobposts.cv.data = fs.readFileSync(cv.path);
        jobposts.cv.contentType = cv.type;
      }
     
                 await jobposts.save();
      res.status(201).send({
        success: true,
        message: "jobpost Created Successfully",
        jobposts,
      });
             
     
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating jobpost",
      });
    }
  };
  

  //get all jobposts
  module.exports.getjobpostController = async (req, res) => {
    try {
      const jobposts = await jobpostModel
        .find({})
        .populate("category")
        .select("-photo")
        .limit(12)
        .sort({ createdAt: -1 });
      res.status(200).send({
        success: true,
        counTotal: jobposts.length,
        message: "ALljobposts ",
        jobposts,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting jobposts",
        error: error.message,
      });
    }
  };
  // get single jobpost
  module.exports.getSinglejobpostController = async (req, res) => {
    try {
      const jobpost = await jobpostModel
        .find({ slug: req.params.slug })
        .select("-photo")
        .populate("category");
      res.status(200).send({
        success: true,
        counTotal: jobpost.length,
        message: "same type jobposts Fetched",
        jobpost,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Eror while getitng single jobpost",
        error,
      });
    }
  };
  
  // get photo
  module.exports.jobpostPhotoController = async (req, res) => {
    try {
      const jobpost = await jobpostModel.findById(req.params.pid).select("photo");
      if (jobpost.photo.data) {
        res.set("Content-type", jobpost.photo.contentType);
        return res.status(200).send(jobpost.photo.data);
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
  module.exports.deletejobpostController = async (req, res) => {
    try {
      await jobpostModel.findByIdAndDelete(req.params.pid).select("-photo");
      res.status(200).send({
        success: true,
        message: "jobpost Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting jobpost",
        error,
      });
    }
  };
  
//   //upate jobposta
  module.exports.updatejobpostController = async (req, res) => {
    try {
        const {company_name,job_type,email,user_phone,company_email,company_phone,Location,work,year,website,otherlinks,job_role,skill,spoken_english,salary,duty_hours,freshers_allowed,age_limit,qualification,job_expire,employment_type,} =
        req.fields;
      const { photo } = req.files;
      const { cv} = req.files;
      //alidation
      
  
      const jobposts = await jobpostModel.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug: slugify(jobpost_type) },
        { new: true }
      );
      if (photo) {
        jobposts.photo.data = fs.readFileSync(photo.path);
        jobposts.photo.contentType = photo.type;
      }
      if (cv) {
        jobposts.cv.data = fs.readFileSync(cv.path);
        jobposts.cv.contentType = cv.type;
      }
      await jobposts.save();
      res.status(201).send({
        success: true,
        message: "jobpost Updated Successfully 👍",
        jobposts,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in Update jobpost",
      });
    }
  };
  