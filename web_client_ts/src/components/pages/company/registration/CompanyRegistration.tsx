import { company_registration } from "../../../../assets/images"
import FormDashboard from "../../../shared/FormDashboard/FormDashboard"
import CompanyRegistrationForm from "./CompanyRegistrationForm/CompanyRegistrationForm"

const CompanyRegistration = () => {
  return (
    <>
         <FormDashboard image={company_registration} child={<CompanyRegistrationForm />} HeadingContent={"empty"}/>
    </>
  )
}

export default CompanyRegistration