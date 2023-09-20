import { contact_us } from "../../../../assets/images"
import FormDashboard from "../../../shared/FormDashboard/FormDashboard"
import ContactUsForm from "./Contact_Form/ContactUsForm"

const Contact = () => {
  return (
    <FormDashboard image={contact_us} child={<ContactUsForm/>}/>
  )
}

export default Contact