import { useContext, useEffect } from "react";

import AdditonalDetails from "./additionalDetails/AdditonalDetails";
import MyLeftProfile from "./myLeftProfile/MyLeftProfile";
import MyProfileDetails from "./myProfileDetails/MyProfileDetails";
import MySkill from "./mySkill/MySkill";
import MyQualification from "./qualification/MyQualification";
import "./profile.css";
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext";
import MyResumeContainer from "./myResumeContainer/MyResumeContainer";

const ApplicantProfile = () => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    useEffect(() => {
        console.log(applicantDetails._id);

    }, [])


    return (
        <>
            <div className="mt-16 my-16 min-h-screen px-6">

                <div className="body md:flex flex-col md:flex-row gap-10 px-3 md:px-32 py-10">
                    {/* Left Side  */}
                    <div className="left_side mb-5 md:h-screen md:fixed ">
                        <MyLeftProfile defaultApplicantDetails={applicantDetails} />
                        <MyResumeContainer />
                    </div>
                    {/*RIGHT side  */}
                    <div className="w-full flex flex-col gap-7 md:ml-80">
                        <MyProfileDetails defaultApplicantDetails={applicantDetails} />
                        <MySkill skillList={applicantDetails?.skills} />
                        <MyQualification qualificationDetails={applicantDetails?.qualification_details} />
                        <AdditonalDetails defaultApplicantDetails={applicantDetails} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ApplicantProfile