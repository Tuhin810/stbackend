import { useCallback, useContext, useEffect, useState } from 'react';
import { CompanyList } from '../../../../../@types/CompanyList';
import { getCompanyList } from '../../../../../utils/apis/company/company';
import { RecruiterDetails } from '../../../../../@types/RecruiterDetails';
import { registerRecruiter } from '../../../../../utils/apis/recruiter/recruiter';
import { Link, useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../../context/recruiterDetails/RecruiterContext';
import { globalContext } from '../../../../../context/GlobalDetails/GlobalContext';

const RecruiterSignup = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(recruiterContext);
  const {loggedIn} = useContext(globalContext);
  
  const [errors, setErrors]=useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [companyList, setCompanyList] = useState<CompanyList[]>([]);
  const [page, setPage] = useState<number>(0);
  const [button, setButton] = useState<string>('Next');
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterDetails>({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    country_code: "+91",
    phone: 0,
    password: "",
    address: "",
    state: "",
    country: "india",
    pin: 0,
    age: 0,
    dob:new Date(),
    company_id:""
  } as RecruiterDetails);

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

  const signUpRecruiter = async () => {
    const response = await registerRecruiter(recruiterSignUpDetail);
    if (response?.status===200) {
      const recruiterDetails = response.data.recruiter as RecruiterDetails;
      dispatch({ type: "login",payload:recruiterDetails })
      loggedIn({type:"login",userType:"recruiter"});
      navigate('/recruiter/jobs');
    }
  }

  const handleChnageRecruiterDetails = useCallback((event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
    const {name,value} = event.target;
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, { [name]: value }))
  },[])

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

  useEffect(() => {
    getCompanyList().then((response) => {
      const companyList = response!.data.company;
      setCompanyList(companyList)
    });
  }, []);

  useEffect(()=>{
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit){
      console.log(recruiterSignUpDetail)
    }
  },[errors])

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
          {
            (page === 0) ?
              <>
                <div className="mb-2">
                  <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-1">Company</label>
                  <select placeholder='Select Company Name' onChange={(e) => handleChnageRecruiterDetails(e)} id="company" name="company" className="w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300">
                    {
                      companyList.map(company => {
                        return (
                          <option value={company._id}>{company.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <p className="text-sm text-gray-600 mb-2">If your company is not listed <Link to="/newCompany" className="text-blue-500 hover:underline">register here</Link></p>
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>First Name</span> {errors.first_name &&  <span className="inline-block text-red-500 text-right w-auto">Required</span>}</label>
                  <input type="text" id="firstName" name="firstName" className={errors.first_name? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
                  
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>Last Name</span> {errors.last_name && <span className="inline-block text-red-500 text-right w-auto">Required</span>}</label>
                  <input type="text" id="lastName" name="lastName" className={errors.last_name? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
                </div>
              </>
              :
              <>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>Email</span>{errors.email && <span className="inline-block text-red-500 text-right w-auto">{errors.email}</span>} </label>
                  <input type="email" id="email" name="email" className={errors.email? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
                  
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>Password</span>{errors.password && <span className="inline-block text-red-500 text-right w-auto">Required</span>}</label>
                  <input type="password" id="password" name="password" className={errors.password? 'w-full px-4 py-2 border rounded-md focus:outline-none border-2 focus:border-red-500 border-red-500' : 'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
                  
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
