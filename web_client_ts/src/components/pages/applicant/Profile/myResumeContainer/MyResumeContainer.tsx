import { useContext } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";

const MyResumeContainer = () => {
  const navgate = useNavigate();
  const {applicantDetails}=useContext(applicantContext).applicantloggedinDetails;
  const routeTo = () => {
    const path = "/jobSeeker/resume"
    navgate(path)
  }
  const currentUrl = window.location.host + '/resume/' + applicantDetails._id;
  
  return (
    <div className="">
      <div className=" m-auto w-full mt-4 h-24 max-w-sm 
       text-blue-500 bg-white font-bold border border-gray-200 cursor-pointer
        rounded-xl shadow-md  flex items-center justify-center"
        onClick={routeTo}>

        <div className="me-3">
          <QRCode value={currentUrl} size={50} />
        </div>

        <div className="">
          <div className="text-lg">Download Resume</div>
          <div className="text-xs text-red-400 font-bold">created by starmark</div>
        </div>
      </div>

    </div>
  )
}

export default MyResumeContainer
