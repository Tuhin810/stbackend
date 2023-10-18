import { applicant_signup } from "../../../../../assets/images"

import { RecruiterSignupContent } from "../../../../shared/Content/Content"

import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import RecruiterSignupForm from "./RecruiterSignUpForm/RecruiterSignupForm"

const RecruiterSignUp = () => {
  return (
// <<<<<<< HEAD
    <FormDashboard image={applicant_signup} child={<RecruiterSignupForm />} HeadingContent={<RecruiterSignupContent/>}/>
// 261e3d0e1a0b538df6463aa2221a1c640af67446
  )
}

export default RecruiterSignUp