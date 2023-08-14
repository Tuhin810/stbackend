const mongoose =require('mongoose')


const { Schema } = mongoose;

const jobpostSchema = new Schema({
   company_name:{
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
   website:{
    type:String,
 },
  otherlinks:{
       type:String,
     },
     worker:{
        type:Number,
     },
     year:{
        type:String,
     },

//    job details question
job_type:{
    type:String,
    require:true
   },
job_role:{
    type:String,
    require:true
},
skill:{
    type:String,
    require:true
},
spoken_english:{
    type:String,
    
},
salary:{
    type:String,
    require:true
},
duty_hours:{
    type:String,
    require:true
},
employment_type:{
    type:String,
    require:true
},
freshers_allowed:{
    type:String,
    
},
age_limit:{
    type:String,
  
},
qualification:{
    type:String,
    require:true
},
job_expire:{
    type:String,
    require:true
},


category: {
    type: mongoose.ObjectId,
    ref: "Category",
    
  },


  },{ timestamps: true });

 

  const jobpost= new mongoose.model("jobpost", jobpostSchema )
  module.exports= jobpost


  