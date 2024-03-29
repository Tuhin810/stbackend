import { applicant_signup } from "../../../../../assets/images"
import { ApplicantSignupContent } from "../../../../shared/Content/Content"
import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import ApplicantSignupForm from "../ApplicantSignUpForm/ApplicantSignupForm"

const ApplicantSignup = () => {
  return (
    <>
        <FormDashboard image={applicant_signup} child={<ApplicantSignupForm />} HeadingContent={<ApplicantSignupContent/>}/>
        </>
    )
  
}

export default ApplicantSignup