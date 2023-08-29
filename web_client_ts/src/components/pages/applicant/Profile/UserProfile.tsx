import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AdditonalDetails from "./additionalDetails/AdditonalDetails";
import MyLeftProfile from "./myLeftProfile/MyLeftProfile";
import MyProfileDetails from "./myProfileDetails/MyProfileDetails";
import MyResumeContainer from "./myResumeContainer/MyResumeContainer";
import MySkill from "./mySkill/MySkill";
import MyQualification from "./qualification/MyQualification";
import { getApplicantDetailsById } from "../../../../utils/apis/applicant/Applicant";
import "./profile.css";
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext";

const ApplicantProfile = () => {
    // const params=useParams();
    // const [isLoading,setIsLoading]=useState<boolean>(false);
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    // const getApplicantDetails= async() =>{
    //     const applicantId:string =params.id!;
    //     setIsLoading(true);
    //     const response = await getApplicantDetailsById(applicantId);
    //     setIsLoading(false);
    //     if(response?.status===200){

    //     }
    // }

    return (
        <>
            <div className=" my-16 min-h-screen">

                <div className="body flex gap-10 px-32 py-10">
                    {/* Left Side  */}
                    <div className="left_side ">
                        <MyLeftProfile first_name={applicantDetails?.first_name} middle_name={applicantDetails?.middle_name} last_name={applicantDetails?.last_name} />
                        <MyResumeContainer />
                    </div>
                    {/*RIGHT side  */}
                    <div className="w-full flex flex-col gap-7">
                        <MyProfileDetails first_name={applicantDetails?.first_name} last_name={applicantDetails?.last_name} gender={applicantDetails?.gender}
                            country_code={applicantDetails?.country_code} phone={applicantDetails?.phone} email={applicantDetails?.email} address={applicantDetails?.address}
                            birthday={applicantDetails?.dob} />
                        <MySkill skillList={applicantDetails?.skills} />
                        <MyQualification />
                        <AdditonalDetails fresher={applicantDetails?.is_fresher} spoken_english={ applicantDetails?.spoken_english} min_salary={applicantDetails?.min_expected_salary}
                            min_duty_hours={applicantDetails?.min_duty_hours} experience={applicantDetails?.experience_year } />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ApplicantProfile