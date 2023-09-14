import { useContext, useEffect, useState } from "react"
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext"
import { getApplicantInvitedJobList } from "../../../../utils/apis/applicant/Applicant"
import JobCard from "../../../shared/jobCard/JobCard"
import { InvitedJob } from "../../../../@types/interfaces/InvitedJobList"

const ApplicantInvitedJobList = () => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    const [jobDetailsList, setJobDetailsList] = useState<InvitedJob[]>([]);

    const getInvitedJobList = async () => {
        const response = await getApplicantInvitedJobList(applicantDetails._id!);
        if (response?.status === 200) {
            setJobDetailsList(response?.data.data);
        }
    }

    useEffect(() => {
        getInvitedJobList();
    }, []);
    return (
        <div className="mt-20">
            {
                (jobDetailsList.length != 0) ?
                    <>
                    <div className="px-10">
                        {
                            jobDetailsList.map((invitedJob, value) => {
                                const {job_details} = invitedJob
                                return (
                                    <JobCard jobDetails={job_details} key={value} InvitedJob={""} />
                                )
                            })
                        }
                    </div>
                    </> : <>You have not invited no jobs yet</>
            }
        </div>
    )
}

export default ApplicantInvitedJobList