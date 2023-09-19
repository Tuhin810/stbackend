import { useContext, useEffect, useState } from "react"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { getApplicantInvitedJobList } from "../../../../../utils/apis/applicant/Applicant";
import { InvitedJob } from "../../../../../@types/interfaces/InvitedJobList";
// import { JobCard } from "../../JobsPage/JobList/jobCard/JobCard";

export const ApplicantAcceptedJobList = () => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    const [jobDetailsList, setJobDetailsList] = useState<InvitedJob[]>([]);

    const getInvitedJobList = async () => {
        const response = await getApplicantInvitedJobList(applicantDetails._id!);
        if (response?.status === 200) {
            const filteredList = response.data.data.filter((job: { accept: boolean; }) => job.accept === true);
            setJobDetailsList(filteredList);
            console.log("list", filteredList);
        }
    }
    useEffect(() => {
        getInvitedJobList();
    }, []);

    return (
        <div>
            <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                {
                    jobDetailsList.slice(0, 2).map((invitedJob, value) => {
                        const { job_details } = invitedJob
                        return (
                            <div key={value}>
                                <li className="mt-2">

                                    <a
                                        className="p-5 flex flex-col justify-between
    bg-gray-100 dark-bg-gray-200 rounded-lg"
                                        href="#">

                                        <div
                                            className="flex items-center justify-between
        font-semibold capitalize dark-text-gray-700">


                                            <span>{job_details.job_title}</span>

                                            <div className="flex items-center">
                                                <svg
                                                    className="h-5 w-5 fill-current mr-1
                text-gray-600"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M14 12l-4-4v3H2v2h8v3m12-4a10
                    10 0 01-19.54 3h2.13a8 8 0
                    100-6H2.46A10 10 0 0122 12z"></path>
                                                </svg>
                                                <span>₹{job_details.min_salary} - ₹{job_details.max_salary}</span>
                                            </div>

                                        </div>

                                        <p
                                            className="text-sm font-medium leading-snug
        text-gray-600 my-3">

                                            Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Explicabo assumenda porro
                                            sapiente, cum nobis tempore delectus
                                            consectetur ullam reprehenderit quis ducimus,
                                            iusto dolor nam corporis id perspiciatis
                                            consequuntur saepe excepturi.
                                        </p>

                                        <div className="flex justify-between">


                                            <div className="flex">
                                                <img
                                                    className="h-6 w-6 rounded-full mr-3"
                                                    src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                                                    alt="" />
                                                <span>
                                                    <span
                                                        className="text-blue-500
                    font-semibold">
                                                        Regina C.
                                                    </span>
                                                    via HeyTutor
                                                </span>
                                            </div>

                                            <p
                                                className="text-sm font-medium leading-snug
            text-gray-600">
                                                14 hours ago
                                            </p>

                                        </div>

                                    </a>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
