import { useNavigate } from "react-router-dom";

const MyResumeContainer = () => {
  const navigate=useNavigate();
  const routeToResume = () =>{
    const path = "/applicant/resume";
    navigate(path);
  }
  return (
    <div>
      <div className="w-72 max-w-sm min-h-fit mt-4 h-40  p-4 bg-white border border-gray-200
       rounded-lg shadow sm:p-6 flex items-center justify-center" onClick={routeToResume}>
        Create Your Cv
      </div>
    </div>
  )
}

export default MyResumeContainer
