import { useNavigate, useParams } from "react-router-dom";
import { IMatchedApplicantApplicant } from "../../../../@types/interfaces/props/BrodcastJobProps.ts/MatchedApplicantProps"
import AngleRightIcon from "../../../shared/icons/angleRight/AngleRightIcon";
// import { hideModal } from "../../../../utils/commonFunctions/HandleModal";

const MatchedApplicantList = ({ applicantList }: IMatchedApplicantApplicant) => {
    const navigte=useNavigate();
    const params = useParams();
    const viewApplicantResume = (applicantId:string) =>{
        const jobId = params.jobId;
        const path = `/employer/applicant-resume/${applicantId}/${jobId}`;
        navigte(path);
        console.log(jobId);
    }
   
    
    return (
        <div >
            <div className="w-full h-[60vh] overflow-y-auto px-2 py-5 gap-5">
                <div className="h-8"></div>
                {
                    applicantList.map((applicantDetails, key) => {
                        console.log(applicantDetails);
                        return (
                            <div key={key}>
                                <div className="w-full my-3 h-full pb-5 border-2 flex pt-3 justify-center rounded-lg items-center shadow-lg">
                                    <div className="flex justify-between items-center w-full px-4">
                                        <div className="flex items-center  ">
                                            <div className="mr-4 w-12 h-12 rounded-full shadow">
                                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src={applicantDetails.applicant_details?.photo?.toString()} alt="avatar" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">{applicantDetails?.applicant_details.first_name} {applicantDetails.applicant_details.last_name}</h3>
                                                <p className="text-gray-600 text-xs leading-3">{applicantDetails.applicant_details.email}</p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer" onClick={()=>viewApplicantResume(applicantDetails.applicant_details._id!)}>
                                            <AngleRightIcon />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default MatchedApplicantList