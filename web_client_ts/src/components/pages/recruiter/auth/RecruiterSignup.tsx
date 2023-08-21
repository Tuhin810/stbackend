import { useContext, useEffect, useState } from 'react';
import { CompanyList } from '../../../../@types/CompanyList';
import { getCompanyList } from '../../../../utils/apis/company/company';
import { RecruiterSignupDetails } from '../../../../@types/RecruiterSignupDetails';
import { registerRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import { useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { globalContext } from '../../../../context/GlobalDetails/GlobalContext';

const RecruiterSignup = () => {
  const navigate = useNavigate();
  const [companyList, setCompanyList] = useState<CompanyList[]>([]);
  const [page, setPage] = useState<number>(0);
  const [button, setButton] = useState<string>('Next');
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterSignupDetails>({} as RecruiterSignupDetails);
  const recruiterState = useContext(recruiterContext)
  const globalState = useContext(globalContext);
  const handleNext = async () => {
    if (page == 0) {
      setPage(1);
      setButton("Submit");
    }
    else {
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
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      first_name: value
    }))
  }
  const handleChangeLastName = (event: any) => {
    const { value } = event.target
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      last_name: value
    }))
  }
  const handleChangeEmail = (event: any) => {
    const { value } = event.target
    console.log("event", event)
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      email: value
    }))
  }
  const handleChangePassword = (event: any) => {
    const { value } = event.target
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      password: value
    }))
  }

  const signUpRecruiter = async () => {

    const response = await registerRecruiter(recruiterSignUpDetail);
    if (response?.status) {
      let recruiterDetails = response.data as RecruiterSignupDetails;
      recruiterState.loggedIn(recruiterDetails);
      globalState.loggedIn("recruiter");
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
                <select placeholder='Select Company Name' onChange={(e) => handleChangeCompanyName(e)} id="company" name="company" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
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
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-1">First Name</label>
                <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeFirstName(e)} />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-1">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeLastName(e)} />
              </div>
            </>
            :
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeEmail(e)} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangePassword(e)} />
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
