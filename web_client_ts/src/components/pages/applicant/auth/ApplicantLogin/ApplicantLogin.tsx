import { applicant_login } from "../../../../../assets/images"
import { LoginContent } from "../../../../shared/Content/Content"
import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import ApplicantLoginForm from "../ApplicantLoginForm/ApplicantLoginForm"

const ApplicantLogin = () => {
    return (
        <>
        <FormDashboard image={applicant_login} child={<ApplicantLoginForm />} HeadingContent={<LoginContent/>}/>
        </>
    )
}

export default ApplicantLogin