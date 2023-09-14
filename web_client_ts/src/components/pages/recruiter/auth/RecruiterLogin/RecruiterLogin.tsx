import { recruiter_login } from "../../../../../assets/images"
import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import RecruiterLoginForm from "../RecruiterLoginForm/RecruiterLoginForm"

const RecruiterLogin = () => {
  return (
    <FormDashboard image={recruiter_login} child={<RecruiterLoginForm/>}/>
  )
}

export default RecruiterLogin