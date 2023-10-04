import { useParams } from "react-router-dom"
import { getApplicantDetailsById, getApplicantResumePrivacy } from "../../../../utils/apis/applicant/Applicant";
import { useEffect, useState } from "react";
import { ApplicantDetails } from "../../../../@types/ApplicantDetails";
import Resume from "../../../shared/resume/Resume";
import Spinner from "../../../shared/spinner/Spinner";
import NotFound from "../../../shared/notfound/NotFound";

const SharedResume = () => {
    const params = useParams();
    const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        country_code: "+91",
        phone: 0,
        current_address: "",
        permanent_address: "",
        state: "West Bengal",
        country: "",
        profile_bio:"",
        pin: 0,
        age: 0,
        birth_year:0,
        experience_year: 0,
        skills: [],
        additonal_skills: [],
        spoken_english: true,
        is_fresher: false,
        gender: "male",
        qualification_to_search: [],
        qualification_details:[],
        min_expected_salary:0,
        min_duty_hours:0
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPublic, setIsPublic] = useState<boolean>(false);

    const isResumePublic = async (applicantId: string) => {
        setIsLoading(true);
        const response = await getApplicantResumePrivacy(applicantId);
        setIsLoading(false)
        if (response?.status === 200) {
            setIsPublic(response?.data.data.is_resume_public)
        }
    }

    const getApplicantDetails = async (applicantId: string) => {
        setIsLoading(true);
        const response = await getApplicantDetailsById(applicantId);
        setIsLoading(false);
        if (response?.status === 200) {
            setApplicantDetails(response?.data.applicant);
        }
    }

    useEffect(() => {
        const applicantId = params.id!;
        isResumePublic(applicantId);
        console.log("is public",isPublic);
        if (isPublic) {
            getApplicantDetails(applicantId);
        }
    }, [isPublic, params.id])

    return (
        <div>
            {
                (isLoading) ?
                    <Spinner /> :
                    (isPublic) ?
                        <Resume defaultApplicantDetails={applicantDetails} />
                        : <NotFound message="unable to access,ask applicant to make it public"/>
            }
        </div>
    )
}

export default SharedResume