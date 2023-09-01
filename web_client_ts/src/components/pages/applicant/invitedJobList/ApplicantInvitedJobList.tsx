import { useContext, useEffect, useState } from "react"
import { JobPostDetails } from "../../../../@types/JobPostDetails"
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext"
import { getApplicantInvitedJobList } from "../../../../utils/apis/applicant/Applicant"
import JobCard from "../../../shared/jobCard/JobCard"

const ApplicantInvitedJobList = () => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    const [jobDetailsList, setJobDetailsList] = useState<JobPostDetails[]>([]);

    const getInvitedJobList = async () => {
        const response = await getApplicantInvitedJobList(applicantDetails._id!);
        if (response?.status === 200) {
            setJobDetailsList(response?.data.invitedJobList);
        }
    }

    useEffect(() => {
        getInvitedJobList();
    }, []);
    return (
        <>
            {
                (jobDetailsList.length != 0) ?
                    <>
                    <div className="px-10">
                        {
                            jobDetailsList.map((job, value) => {
                                return (
                                    <JobCard jobDetails={job} key={value} />
                                )
                            })
                        }
                    </div>
                    </> : <>You have not invited no jobs yet</>
            }
        </>
    )
}

export default ApplicantInvitedJobList