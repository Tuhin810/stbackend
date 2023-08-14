const express = require('express')
const fs = require("fs");
const app = express()

const port = process.env.PORT || 80
const cors = require('cors')
const cookieParser = require("cookie-parser");
require('dotenv').config()
const formidableMiddleware = require('express-formidable');
const mongoose =require('mongoose')


const options={
key:fs.readFileSync('./key.pem'),
  cert:fs.readFileSync('./cert.pem'),
}

const { regesterUser, loginUser, getUser } = require('./controller/auth');
const { authenticate, jobProvider } = require('./midleware/authenticate');
const { createProfileController, getProfileController, getSingleProfileController, ProfilePhotoController, deleteProfileController, updateProfileController } = require('./controller/Profile');
const { createcompanyController, updatecompanyController, getcompanyController, getSinglecompanyController, deletecompanyController } = require('./controller/company');
const { createjobpostController, updatejobpostController, getjobpostController, getSinglejobpostController, deletejobpostController } = require('./controller/jobpost');




//routs
const router = express.Router();
 


router.get('/', (req,res)=>{
  res.sendFile(__dirname+'/index.html')
})


//user auth routs
router.post('/regester',regesterUser)
router.post('/login', loginUser)


//user profile routes
router.post("/create-Profile",authenticate,formidableMiddleware(),createProfileController);
router.put("/update-profile/:pid",authenticate,formidableMiddleware(),updateProfileController);
router.get("/get-Profile", getProfileController);
router.get("/get-Profile/:email", getSingleProfileController);
router.get("/Profile-photo/:pid", ProfilePhotoController);
router.delete("/delete-Profile/:pid", deleteProfileController);


//company details
router.post("/create-company",authenticate,formidableMiddleware(),createcompanyController);
router.put("/update-company/:pid",authenticate,formidableMiddleware(),updatecompanyController);
router.get("/get-company", getcompanyController);
router.get("/get-company/:email", getSinglecompanyController);
router.delete("/delete-company/:pid", deletecompanyController);

//job post details
router.post("/create-jobpost",authenticate,formidableMiddleware(),createjobpostController);
router.put("/update-jobpost/:pid",authenticate,formidableMiddleware(),updatejobpostController);
router.get("/get-jobpost", getjobpostController);
router.get("/get-jobpost/:slug", getSinglejobpostController);
router.delete("/delete-jobpost/:pid", deletejobpostController);


//job seekers page
router.get('/jobs',authenticate, (req,res)=>{
console.log("jobs");
  res.send("jobs")
  })

//job provider page
router.get('/hire',authenticate,jobProvider, (req,res)=>{
  console.log("hire");
    res.send("hire people")
    })

app.use(express.json())
app.use(cors())
app.use(cookieParser());
// app.use(formidableMiddleware());


mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("  Database connected 📟 "))
.catch((err)=>console.log(err))
app.use(router);


app.listen(port, () => {
  console.log(`  🚀 server listening on port ${port}`)
})

