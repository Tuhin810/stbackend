import { useContext, useEffect } from "react";

import AdditonalDetails from "./additionalDetails/AdditonalDetails";
import MyLeftProfile from "./myLeftProfile/MyLeftProfile";
import MyProfileDetails from "./myProfileDetails/MyProfileDetails";
import MySkill from "./mySkill/MySkill";
import MyQualification from "./qualification/MyQualification";
import "./profile.css";
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext";
import MyResumeContainer from "./myResumeContainer/MyResumeContainer";
// import Home from "../../common/home/Home";
import { useNavigate } from "react-router-dom";
import { MyExperience } from "./myExperience/MyExperience";
// import { updateApplicantPrivacy } from "../../../../utils/apis/applicant/Applicant"
import { showModal } from "../../../../utils/commonFunctions/HandleModal";

const ApplicantProfile = () => {
  const { applicantloggedinDetails } = useContext(applicantContext);

  const navigate = useNavigate();

  
  
  if (!applicantloggedinDetails) {
    navigate("/home");
    return null;
  }
  
  const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;
  
  // Get the current URL of the page.
  const currentUrl = window.location.host + '/resume/' + applicantDetails._id;
  
  function shareOnWhatsApp() {
    
    // Create a WhatsApp share link.
    const whatsappShareLink = `https://wa.me/?text=${currentUrl}`;
    
    // Open the WhatsApp share link in a new tab.
    window.open(whatsappShareLink, '_blank');
  }
  
  function shareOnLinkedIn() {
    const linkedinShareLink = `https://www.linkedin.com/shareArticle?url=${currentUrl}`;
    window.open(linkedinShareLink, '_blank');
  }



  useEffect(() => {
    console.log("id:",applicantDetails._id);
    console.log("location", window.location.host + '/resume/' + applicantDetails._id);
    if (!applicantloggedinDetails.applicantDetails || applicantloggedinDetails.applicantDetails === undefined) {
      navigate("/home");
    }
  }, [])
  return (
    <>
      <div className="mt-16 mt-16 min-h-screen capitalize">

        <div className="body md:flex flex-col md:flex-row gap-10 px-3 md:px-32 py-10">
          {/* Left Side  */}
          <div className=" mb-5 flex flex-col   md:fixed ">
            <MyLeftProfile defaultApplicantDetails={applicantDetails} />
            <MyResumeContainer />
          </div>
          {/*RIGHT side  */}
          <div className="w-full flex flex-col gap-7 md:ml-80">
            <MyProfileDetails defaultApplicantDetails={applicantDetails} />
            <MySkill skillList={applicantDetails?.skills} />
            <MyQualification qualificationDetails={applicantDetails?.qualification_details} />
            <MyExperience Experience={applicantDetails?.experience_details} />
            <AdditonalDetails defaultApplicantDetails={applicantDetails} />
          </div>
        </div>


        {/* Share profile */}

        <div className="group fixed bottom-0 right-0 p-8 flex items-end justify-end w-24 h-24 ">

          <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  ">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill group-hover:rotate-90 transition  transition-all duration-[0.6s]" viewBox="0 0 16 16">
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
            </svg>
          </div>

          <div onClick={shareOnWhatsApp} className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-500 scale-100 hover:bg-green-400 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </div>

          <div onClick={() => showModal("applicantSettings")} className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-gray-500 hover:bg-gray-400  text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </div>

          <div onClick={shareOnLinkedIn} className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-blue-500 hover:bg-blue-400 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
          </div>
        </div>


      </div>
    </>
  )
}

export default ApplicantProfile


