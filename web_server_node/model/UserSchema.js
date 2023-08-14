const mongoose =require('mongoose')
var jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema = new Schema({
   Name:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true
   },
   phone:{
      type:String,
   },
   password:{
    type:String,
    require:true
   },
   cpassword:{
    type:String,
    require:true
   },
   role:{
      type:Number,
      default:0,
   },
   tokens:[
      {
         token:{
            type:String,
            require:true
         }
      }
   ]
   
  });

  userSchema.methods.generateAuthToken = async function(){
   try {
      const token = jwt.sign({_id:this._id}, process.env.JWTKEY);
      this.tokens = this.tokens.concat({token:token})
      await this.save()
      return token;
   } catch (error) {
      console.log(error);
   }

  }

  const USER= new mongoose.model("user", userSchema)
  module.exports= USER