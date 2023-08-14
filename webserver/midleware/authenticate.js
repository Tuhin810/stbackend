var jwt = require('jsonwebtoken');
const USER = require('../model/UserSchema');



//job seeker page
module.exports.authenticate = async(req,res,next)=>{

  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWTKEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }

}


//jobprovider page

module.exports.jobProvider = async (req, res, next) => {
  try {
    const user = await USER.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
     
      message: "Error in admin middelware",
    });
  }
};