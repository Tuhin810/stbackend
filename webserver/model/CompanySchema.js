const mongoose =require('mongoose')


const { Schema } = mongoose;

const companySchema = new Schema({
   name:{
    type:String,
    require:true
   },
   company_logo:{
      type:String,
      require:true
     },
   company_type:{
      type:String,
      require:true
     },
     slug: {
      type: String,
    
    },
   email:{
    type:String,
    require:true
   },
   user_phone:{
    type:String,
    require:true
   },
   company_email:{
    type:String,
    require:true
   },
   company_phone:{
    type:String,
    require:true
   },
   Location:{
    type:String,
    require:true
   },
   Gst:{
    type:String,
    
   },
   licence:{
      type:Number,    
   },
   worker:{
      type:Number,
   },
   year:{
      type:String,
   },
   desc:{
      type:String,
   },
   website:{
      type:String,
   },
    otherlinks:{
         type:String,
       },
       category: {
         type: mongoose.ObjectId,
         ref: "Category",
         
       },
   
  },{ timestamps: true });

 

  const company= new mongoose.model("company", companySchema )
  module.exports= company


  