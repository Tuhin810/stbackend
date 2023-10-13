import { applicant_signup } from "../../../../../assets/images"
import { SignupContent } from "../../../../shared/Content/Content"
import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import RecruiterSignupForm from "./RecruiterSignUpForm/RecruiterSignupForm"

const RecruiterSignUp = () => {
  return (
    <FormDashboard image={applicant_signup} child={<RecruiterSignupForm />} HeadingContent={<SignupContent/>}/>
  )
}

export default RecruiterSignUp