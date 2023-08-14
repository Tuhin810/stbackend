const mongoose =require('mongoose')
const { Schema } = mongoose;

const ProfileSchema = new Schema(
  {
    name: {
      type: String,
  
    },
    email:{
      type:String,

     },
    Education: {
        type: String,
       
      },

    slug: {
      type: String,
    
    },
    Experience: {
      type: String,
      
    },
    Summary: {
        type: String,
        
      },
    phone: {
      type: Number,
     
    },
    
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      
    },
    Dob: {
      
      
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    cv: {
        data: Buffer,
        contentType: String,
      },
    Married: {
      type: Boolean,
    },
    address:{
      type: String,
    },
    links1: {
        type: String,
       
      },
    links2: {
        type: String,
      
      },
  },
  { timestamps: true }
);



const Profile= new mongoose.model("Profile", ProfileSchema)
  module.exports= Profile