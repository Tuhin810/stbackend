import { applicant_signup } from "../../../../../assets/images"
import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import RecruiterSignupForm from "./RecruiterSignUpForm/RecruiterSignupForm"

const RecruiterSignUp = () => {
  return (
    <FormDashboard image={applicant_signup} child={<RecruiterSignupForm />} HeadingContent={"empty"}/>
  )
}

export default RecruiterSignUp