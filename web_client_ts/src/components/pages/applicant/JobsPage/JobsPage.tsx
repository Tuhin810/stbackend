import { JobDescription } from "./JobDescription/JobDescription"
import { JobHeader } from "./JobHeader/JobHeader"
import { JobList } from "./JobList/JobList"

export const JobsPage = () => {
  return (
    <div className="mt-20 ">
        <div className="py-5">
            <JobHeader/>
        </div>
        <div className="flex gap-4 ">
            <div className="md:w-1/2 md:pl-32">
               <JobList/> 
            </div>
            <div className="md:w-1/2 md:pr-16 hidden md:inline">
             <JobDescription/>   
            </div>
        </div>
    </div>
  )
}
