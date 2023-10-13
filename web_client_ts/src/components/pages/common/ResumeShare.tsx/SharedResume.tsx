import { useParams } from "react-router-dom"
import { getApplicantDetailsById, getApplicantResumePrivacy } from "../../../../utils/apis/applicant/Applicant";
import { useEffect, useState } from "react";
import { ApplicantDetails } from "../../../../@types/ApplicantDetails";
import Resume from "../../../shared/resume/Resume";
import Spinner from "../../../shared/spinner/Spinner";
import NotFound from "../../../shared/notfound/NotFound";

const SharedResume = () => {
    const params = useParams();
    const [isAccessable, setIsAccesable] = useState<boolean>(false);
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
        profile_bio: "",
        pin: 0,
        age: 0,
        birth_year: 0,
        experience_year: 0,
        skills: [],
        additonal_skills: [],
        experience_details: [],
        spoken_english: true,
        is_fresher: false,
        gender: "male",
        qualification_to_search: [],
        qualification_details: [],
        min_expected_salary: 0,
        min_duty_hours: 0
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [resume_visibilty_status, setResume_visibilty_status] = useState<number>(0);

    const isResumePublic = async (applicantId: string) => {
        setIsLoading(true);
        const response = await getApplicantResumePrivacy(applicantId);
        setIsLoading(false)
        if (response?.status === 200) {
            setResume_visibilty_status(response?.data.data.resume_visibilty_status)
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
        if (resume_visibilty_status === 2) {
            getApplicantDetails(applicantId);
            setIsAccesable(true);
        }
        if (resume_visibilty_status === 1) {
            const userType = localStorage.getItem("userType");
            if (userType) {
                if (userType?.toLowerCase() === "recruiter") {
                    getApplicantDetails(applicantId);
                    setIsAccesable(true);
                }
            }
        }
    }, [resume_visibilty_status, params.id])

    return (
        <div>
            {
                (isLoading) ?
                    <Spinner /> :
                    (isAccessable) ?
                        <div className="flex justify-center mt-16" id='resume'>
                            <div className="w-1/2">
                                <Resume defaultApplicantDetails={applicantDetails} />
                            </div>
                        </div>
                        : <NotFound message="unable to access,ask applicant to make it public" />
            }
        </div>
    )
}

export default SharedResume