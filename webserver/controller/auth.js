const User =require('../model/UserSchema')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

var jwt = require('jsonwebtoken');

module.exports.regesterUser= async(req,res)=>{
    const {Name,email,password,cpassword,phone,role}=req.body
    if(!email || !Name || !password || !cpassword  ){
        
      return res.status(422).json({error:"fill the form"})
    }
   try{
        const user=await User.findOne({email:email})

        if(user){
            return res.status(200).send({
                success: false,
                message: "Already Register please login",
              });
        }else{
            if(password!==cpassword){
                return res.status(422).json({error:"password and conform password is not same"})
            }else{ 
                User
                .create({Name,email,password,cpassword,phone,role})
                .then((data)=>{
                   console.log("user added");
                   console.log(data);
                   res.status(201).send({
                    success: true,
                    message: "User Register Successfully",
               
                  });
                  
                })
            }
          
         
        }
        }
    catch(e){
        res.status(500).send({
            success: false,
            message: "Errro in Registeration",
            e,
          });
    }
    }


    module.exports.loginUser= async(req,res)=>{
        const{email,password}=req.body
        if(!email || !password  ){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
              });
          }
        res.setHeader('Content-Type', 'application/json');
        try{
            const user = await User.findOne({email:email })

            const match = await User.findOne({email:email,password:password })
            if(user){
                

                      const token = await  user.generateAuthToken();
                console.log("login done");
               console.log("token"); 
           


               if(match){
               
         
              
            // Set a cookie
            
            res.status(200).send({
                success: true,
                message: "login successfully",
                user: {
                  _id: user._id,
                  name: user.Name,
                  email: user.email,
                  cpassword: user.cpassword,
                  password: user.password,
                  phone:user.phone,
                  role:user.role,
                },
                token,
              });
               }else{
                return res.status(200).send({
                    success: false,
                    message: "Invalid Password",
                  });
               }
             
         

            }
            else{
                res.status(500).send({
                    success: false,
                    message: "Error in login",
                   
                  });
               
            }
    
        }
        catch(e){
            res.status(200).send({
                success: false,
                message: "Error in login",
              
              });
        }
    
    }

