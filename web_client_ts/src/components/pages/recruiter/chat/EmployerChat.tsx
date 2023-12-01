import { useContext ,useEffect} from "react"
import ChatBoard from "../../../shared/chat/ChatBoard/ChatBoard"
import { recruiterContext } from "../../../../context/recruiterDetails/RecruiterContext"
import { useParams } from "react-router-dom"
import { showModal } from "../../../../utils/commonFunctions/HandleModal"
import { LockModal } from "../modal/ErrorModal/LockModal/lockModal"

const EmployerChat = () => {
  const params = useParams();
  const { applicantId } = params;
  const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;
  console.log(recruiterDetails._id);
  useEffect(() => {
    showModal('lockPage')
    
  }, [])
  
  return (
    <div className="">
    <div><ChatBoard recruiterId={recruiterDetails._id!} applicantId={applicantId!} sender="employer" />
    
    </div>
    <LockModal/>
    </div>
  )
}

export default EmployerChat