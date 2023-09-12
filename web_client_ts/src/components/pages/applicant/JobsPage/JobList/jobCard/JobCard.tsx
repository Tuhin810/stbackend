import { useNavigate } from "react-router-dom";
import { JobDetailsProps } from '../../../../../../@types/interfaces/props/JobDetailsProps'
import Ratings from '../../../../../shared/Rating_stars/Ratings'
import { defaultCompany } from '../../../../../../assets/images';
import { formatDate,formatTitle } from '../../../../../../utils/commonFunctions/Format';
import { useContext } from "react";
import { globalContext } from '../../../../../../context/GlobalDetails/GlobalContext';
import { brodcastJob } from '../../../../../../utils/apis/Job/jobpost';


export const JobCard = ({ jobDetails }: JobDetailsProps) => {
  const navigate = useNavigate();
  const { globalLoggedIn } = useContext(globalContext);
  const routeToJobDetails = () => {
      const path = `/${globalLoggedIn.userType}/jobDetails/${jobDetails._id}`;
      navigate(path);
  }
  const formatSalaryRange = (salary: number): string => {
      if (salary === 0) {
          return "Not Disclosed"
      }
      return salary.toString();
  }

  const brodcast = async () => {
      const response = await brodcastJob(jobDetails);
      if(response?.status===200){
          window.alert("brodcasted");
      }
      else{
          window.alert("false");
      }
  }
  return (
    <div>
        <div className="w-full cursor-pointer border-2 bg-white h-72 rounded-lg drop-shadow-md px-5 pt-5">
          <div className="flex justify-between">
            <div className="">
            <div className="text-2xl mb-2 text-gray-800 font-semibold hover:underline mb-3">{jobDetails.job_title}</div>
      <div className="company text-sm text-gray-600  uppercase">ORCHID SCIENTIFIC AND INNOVATIVE INDIA PVT LTD</div>
            <div className="">
                <Ratings/>
            </div>
            </div>
               <div className="mt-3 flex justify-end">
                <img className='h-16 w-16 bg-gray-700 border-2 rounded-lg ' src="https://img.naukimg.com/logo_images/groups/v1/275530.gif" alt="" /></div>
        </div>
             <div className="mt-3 flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>{jobDetails.location}

        </div> 

        <div className="Features mt-3 px-2 flex-col gap-3">
        <div className="flex gap-4 ">
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>₹{formatSalaryRange(jobDetails.min_salary)} - ₹{formatSalaryRange(jobDetails.max_salary)} </p>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>{jobDetails.job_type} </p>
                 </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>{jobDetails.no_of_vacancy}&nbsp;vacancies </p>
                </div>
                </div>

                <div className="flex gap-4 mt-2 ">
                <div className="flex items-center  gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p className="mb-1">Applicant <span className="px-2 text-white  py-1 text-xs rounded-full   bg-blue-400">{jobDetails.no_of_applicants} </span> </p>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>{jobDetails.max_experience_year}y experience </p>
                 </div>
                
                </div>
                 
            </div>  
            
        </div>
       
    </div>
  )
}
