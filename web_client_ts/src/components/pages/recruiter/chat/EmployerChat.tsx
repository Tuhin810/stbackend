import { useContext } from "react"
import ChatBoard from "../../../shared/chat/ChatBoard/ChatBoard"
import { recruiterContext } from "../../../../context/recruiterDetails/RecruiterContext"
import { useParams } from "react-router-dom"

const EmployerChat = () => {
  const params = useParams();
  const { applicantId } = params;
  const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;
  console.log(recruiterDetails._id);
  return (
    <div><ChatBoard recruiterId={recruiterDetails._id!} applicantId={applicantId!} sender="employer" /></div>
  )
}

export default EmployerChat