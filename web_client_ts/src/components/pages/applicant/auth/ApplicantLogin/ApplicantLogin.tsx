import { applicant_login } from "../../../../../assets/images"
import { ApplicantLoginContent } from "../../../../shared/Content/Content"
import FormDashboard from "../../../../shared/FormDashboard/FormDashboard"
import ApplicantLoginForm from "../ApplicantLoginForm/ApplicantLoginForm"

const ApplicantLogin = () => {
    return (
        <>
            <FormDashboard image={applicant_login} child={<ApplicantLoginForm />} HeadingContent={<ApplicantLoginContent />} />
        </>
    )
}

export default ApplicantLogin