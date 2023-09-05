import { useContext} from "react";

import AdditonalDetails from "./additionalDetails/AdditonalDetails";
import MyLeftProfile from "./myLeftProfile/MyLeftProfile";
import MyProfileDetails from "./myProfileDetails/MyProfileDetails";
import MySkill from "./mySkill/MySkill";
import MyQualification from "./qualification/MyQualification";
import "./profile.css";
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext";
import { ApplicantProfileState } from "../../../../@types/interfaces/props/ApplicantProfileState";
import MyResumeContainer from "./myResumeContainer/MyResumeContainer";

const ApplicantProfile = ({state}:ApplicantProfileState) => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;

    return (
        <>
            <div className="mt-16 my-16 min-h-screen px-6">

                <div className="body md:flex flex-col md:flex-row gap-10 px-3 md:px-32 py-10">
                    {/* Left Side  */}
                    <div className="left_side mb-5 md:h-screen md:fixed ">
                        <MyLeftProfile first_name={applicantDetails?.first_name} middle_name={applicantDetails?.middle_name} last_name={applicantDetails?.last_name} email={applicantDetails?.email} profile_bio={applicantDetails?.profile_bio} />
                        <MyResumeContainer />
                    </div>
                    {/*RIGHT side  */} 
                    <div className="w-full flex flex-col gap-7 md:ml-80">
                        <MyProfileDetails first_name={applicantDetails?.first_name} last_name={applicantDetails?.last_name} gender={applicantDetails?.gender}
                            country_code={applicantDetails?.country_code} phone={applicantDetails?.phone} email={applicantDetails?.email} current_address={applicantDetails?.current_address} permanent_address={applicantDetails?.permanent_address}
                            birthday={applicantDetails?.birth_year} middle_name={applicantDetails?.middle_name}/>
                        <MySkill skillList={applicantDetails?.skills} />
                        <MyQualification qualificationDetails={applicantDetails?.qualification_details}/>
                        <AdditonalDetails fresher={applicantDetails?.is_fresher} spoken_english={applicantDetails?.spoken_english} min_salary={applicantDetails?.min_expected_salary}
                            min_duty_hours={applicantDetails?.min_duty_hours} experience={applicantDetails?.experience_year} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ApplicantProfile