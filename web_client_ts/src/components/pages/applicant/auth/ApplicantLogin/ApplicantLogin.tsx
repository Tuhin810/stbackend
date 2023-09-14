import { applicant_login } from "../../../../../assets/images"
import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import ApplicantLoginForm from "../ApplicantLoginForm/ApplicantLoginForm"

const ApplicantLogin = () => {
    return (
        <>
        <FormDashboard image={applicant_login} child={<ApplicantLoginForm/>}/>
        </>
    )
}

export default ApplicantLogin