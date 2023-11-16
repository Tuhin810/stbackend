import { company_registration } from "../../../../assets/images"
import { CompanyRegisteredContent } from "../../../shared/Content/Content"
import FormDashboard from "../../../shared/FormDashboard/FormDashboard"
import CompanyRegistrationForm from "./CompanyRegistrationForm/CompanyRegistrationForm"

const CompanyRegistration = () => {
  return (
    <>
         <FormDashboard image={company_registration} child={<CompanyRegistrationForm />} HeadingContent={<CompanyRegisteredContent/>}/>
    </>
  )
}

export default CompanyRegistration