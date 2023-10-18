import { recruiter_login } from "../../../../../assets/images"

import { RecruiterLoginContent } from "../../../../shared/Content/Content"

import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import RecruiterLoginForm from "../RecruiterLoginForm/RecruiterLoginForm"

const RecruiterLogin = () => {
  return (

    <FormDashboard image={recruiter_login} child={<RecruiterLoginForm />} HeadingContent={<RecruiterLoginContent/>}/>

  )
}

export default RecruiterLogin