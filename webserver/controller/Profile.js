
const ProfileModel = require("../model/ProfileSchema")
var slugify = require('slugify')
const fs = require("fs");
const { File } = require("buffer");

module.exports.createProfileController = async (req, res) => {
    try {
      const { name, description, Education,email,address, Experience, Summary, phone,category,Dob,Married,links1,links2} =
        req.fields;
      const { photo } = req.files;
      const { cv} = req.files;
     
  
      const Profiles = new ProfileModel({ ...req.fields, slug: slugify(name) });
      if (photo) {
        Profiles.photo.data = fs.readFileSync(photo.path);
        Profiles.photo.contentType = photo.type;
      }
      if (cv) {
        Profiles.cv.data = fs.readFileSync(cv.path);
        Profiles.cv.contentType = cv.type;
      }
      const user=await ProfileModel.findOne({email:email})

        if(user){
            return res.status(200).send({
                success: false,
                message: "Already Profile exists",
              })}else{
                 await Profiles.save();
      res.status(201).send({
        success: true,
        message: "Profile Created Successfully",
        Profiles,
      });
              }
     
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating Profile",
      });
    }
  };
  

  //get all Profiles
  module.exports.getProfileController = async (req, res) => {
    try {
      const Profiles = await ProfileModel
        .find({})
        .populate("category")
        .limit(12)
        .sort({ createdAt: -1 });
      res.status(200).send({
        success: true,
        counTotal: Profiles.length,
        message: "ALlProfiles ",
        Profiles,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting Profiles",
        error: error.message,
      });
    }
  };
  // get single Profile
  module.exports.getSingleProfileController = async (req, res) => {
    try {
      const Profile = await ProfileModel
        .findOne({ email: req.params.email })
        .populate("category");
      res.status(200).send({
        success: true,
        message: "User Profile Fetched",
        Profile,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Eror while getitng single Profile",
        error,
      });
    }
  };
  
  // get photo
  module.exports.ProfilePhotoController = async (req, res) => {
    try {
      const Profile = await ProfileModel.findById(req.params.pid).select("photo");
      if (Profile.photo.data) {
        res.set("Content-type", Profile.photo.contentType);
        return res.status(200).send(Profile.photo.data);
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
  module.exports.deleteProfileController = async (req, res) => {
    try {
      await ProfileModel.findByIdAndDelete(req.params.pid).select("-photo");
      res.status(200).send({
        success: true,
        message: "Profile Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting Profile",
        error,
      });
    }
  };
  
//   //upate Profilea
  module.exports.updateProfileController = async (req, res) => {
    try {
        const { name, description, Education, Experience,email,address, Summary, phone,category,Dob,Married,links1,links2} =
        req.fields;
      const { photo } = req.files;
      const { cv} = req.files;
      //alidation
      
  
      const Profiles = await ProfileModel.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug: slugify(name) },
        { new: true }
      );
      if (photo) {
        Profiles.photo.data = fs.readFileSync(photo.path);
        Profiles.photo.contentType = photo.type;
      }
      if (cv) {
        Profiles.cv.data = fs.readFileSync(cv.path);
        Profiles.cv.contentType = cv.type;
      }
      await Profiles.save();
      res.status(201).send({
        success: true,
        message: "Profile Updated Successfully",
        Profiles,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in Updte Profile",
      });
    }
  };
  