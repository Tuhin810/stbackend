import { applicant_signup } from "../../../../../assets/images"

import { RecruiterSignupContent } from "../../../../shared/Content/Content"

import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import RecruiterSignupForm from "./RecruiterSignUpForm/RecruiterSignupForm"

const RecruiterSignUp = () => {
  return (

    <FormDashboard image={applicant_signup} child={<RecruiterSignupForm />} HeadingContent={<RecruiterSignupContent/>}/>

  )
}

export default RecruiterSignUp