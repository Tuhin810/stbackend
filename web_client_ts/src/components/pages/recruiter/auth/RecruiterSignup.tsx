import { useContext, useEffect, useState } from 'react';
import { CompanyList } from '../../../../@types/CompanyList';
import { getCompanyList } from '../../../../utils/apis/company/company';
import { RecruiterDetails } from '../../../../@types/RecruiterDetails';
import { registerRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import { Link, useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { globalContext } from '../../../../context/GlobalDetails/GlobalContext';

const RecruiterSignup = () => {
  const navigate = useNavigate();
  const [companyList, setCompanyList] = useState<CompanyList[]>([]);
  const [page, setPage] = useState<number>(0);
  const [button, setButton] = useState<string>('Next');
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterDetails>({} as RecruiterDetails);
  const { dispatch } = useContext(recruiterContext);
  const {loggedIn} = useContext(globalContext);

  const [errors, setErrors]=useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const validate = (values:any) => {
    const errs:any={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (page===0){
      if (!values.first_name){
        errs.first_name="First Name is required";
      }
      if (!values.last_name){
        errs.last_name="Last Name is required";
      }
    }
    else {
      if (!values.email){
        errs.email="Required";
      } else if (!regex.test(values.email)){
        errs.email="Enter valid Email."
      }
      if (!values.password){
        errs.password="Password is required";
      }
    }
    return errs;
  }

  useEffect(()=>{
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit){
      console.log(recruiterSignUpDetail)
    }
  },[errors])

  const handleNext = async () => {
    setErrors(validate(recruiterSignUpDetail))
    setIsSubmit(true)
    if (page == 0 && recruiterSignUpDetail.first_name!=null && recruiterSignUpDetail.last_name!=null) {
      setPage(1);
      setButton("Submit");
    }
    if(page != 0 && recruiterSignUpDetail.email != null && recruiterSignUpDetail.password != null) {
      console.log(page);
      await signUpRecruiter();
    }
  }

  const handleChangeCompanyName = (event: any) => {
    const { value } = event.target
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      company_id: value
    }))
  }

  const handleChangeFirstName = (event: any) => {
    const { value } = event.target
    if (value !== ''){
      errors.first_name='';
    }
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      first_name: value
    }))
  }
  const handleChangeLastName = (event: any) => {
    const { value } = event.target
    if (value !== ''){
      errors.last_name='';
    }
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      last_name: value
    }))
  }
  const handleChangeEmail = (event: any) => {
    const { value } = event.target
    if (value !== ''){
      errors.email='';
    }
    console.log("event", event)
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      email: value
    }))
  }
  const handleChangePassword = (event: any) => {
    const { value } = event.target
    if (value !== ''){
      errors.password='';
    }
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      password: value
    }))
  }

  const signUpRecruiter = async () => {

    const response = await registerRecruiter(recruiterSignUpDetail);
    if (response?.status===200) {
      let recruiterDetails = response.data.recruiter as RecruiterDetails;
      dispatch({ type: "login",payload:recruiterDetails })
      loggedIn({type:"login",userType:"recruiter"});
      navigate('/recruiter/jobs');
    }
  }

  useEffect(() => {
    getCompanyList().then((response) => {
      const companyList = response!.data.company;
      setCompanyList(companyList)
    });
  }, []);

  console.log("recruiter sign-up", recruiterSignUpDetail)

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
          {
            (page === 0) ?
              <>
                <div className="mb-2">
                  <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-1">Company</label>
                  <select placeholder='Select Company Name' onChange={(e) => handleChangeCompanyName(e)} id="company" name="company" className="w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300">
                    {
                      companyList.map(company => {
                        return (
                          <option value={company._id}>{company.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <p className="text-sm text-gray-600 mb-2">If your company is not listed <a href="#" className="text-blue-500 hover:underline">register here</a></p>
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>First Name</span> {errors.first_name &&  <span className="inline-block text-red-500 text-right w-auto">Required</span>}</label>
                  <input type="text" id="firstName" name="firstName" className={errors.first_name? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChangeFirstName(e)} />
                  
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>Last Name</span> {errors.last_name && <span className="inline-block text-red-500 text-right w-auto">Required</span>}</label>
                  <input type="text" id="lastName" name="lastName" className={errors.last_name? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChangeLastName(e)} />
                </div>
              </>
              :
              <>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>Email</span>{errors.email && <span className="inline-block text-red-500 text-right w-auto">{errors.email}</span>} </label>
                  <input type="email" id="email" name="email" className={errors.email? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChangeEmail(e)} />
                  
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>Password</span>{errors.password && <span className="inline-block text-red-500 text-right w-auto">Required</span>}</label>
                  <input type="password" id="password" name="password" className={errors.password? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChangePassword(e)} />
                  
                </div>
              </>
          }

          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" onClick={handleNext}>{button}</button>
          <p className="text-sm text-gray-600 mt-3">Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a></p>
        </div>

      </div>
  )
}

export default RecruiterSignup
