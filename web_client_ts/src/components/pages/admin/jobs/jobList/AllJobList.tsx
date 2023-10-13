import { useEffect, useState } from "react"
import { JobDetails } from "../../../../../@types/interfaces/JobDetails"
import { getAllJobs } from "../../../../../utils/apis/Job/jobpost"
import JobCard from "../../../../shared/jobCard/JobCard"
import Spinner from "../../../../shared/spinner/Spinner"
import { getCompanyList } from "../../../../../utils/apis/company/company"
import { CompanyList } from "../../../../../@types/CompanyList"

const AllJobList = () => {
    const [jobList, setJobList] = useState<JobDetails[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [companyList, setCompanyList] = useState<CompanyList[]>([])
    const getAllJobDetails = async () => {
        setIsLoading(true);
        const response = await getAllJobs();
        setIsLoading(false);
        if (response?.status === 200) {
            setJobList(response.data.data);
        }
    }
    const getAllCompany = async () => {
        const response = await getCompanyList();
        if (response?.status === 200) {
            setCompanyList(response.data.company)
        }
    }

    useEffect(() => {
        getAllJobDetails();
        getAllCompany();
    }, [])
    return (
        <div>
            <div className="container">
                <div className="filter mb-4">
                    <div className="mb-3">

                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Search By Company</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>All</option>
                            {
                                companyList!.map(company => {
                                    return (
                                        <option value={company._id}>{company.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                {
                    (isLoading) ? <Spinner /> :
                        jobList.map((job, key) => {
                            return (
                                <JobCard jobDetails={job} key={key} />
                            )
                        })
                }
            </div>
        </div >
    )
}

export default AllJobList