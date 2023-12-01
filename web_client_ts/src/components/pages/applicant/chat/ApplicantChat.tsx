import { useContext } from "react"
import ChatBoard from "../../../shared/chat/ChatBoard/ChatBoard"
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext"
import { useParams } from "react-router-dom"

const ApplicantChat = () => {
    const params=useParams();
    const {recruiterId} =params;
    const { applicantDetails} = useContext(applicantContext).applicantloggedinDetails;
    return (
        <div className="mt-20">
            <ChatBoard recruiterId={recruiterId!} applicantId={applicantDetails._id!} sender="applicant" />
            

        </div>
    )
}

export default ApplicantChat