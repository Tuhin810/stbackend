import { JobDescription } from "./JobDescription/JobDescription"
import { JobHeader } from "./JobHeader/JobHeader"
import { JobList } from "./JobList/JobList"
import { JobSearchBar } from "./SearchBar/JobSearchBar"

export const JobsPage = () => {
  return (
    <div className="mt-20 ">
      {/* <div className="flex gap-4 w-full px-32 ">
      <JobHeader/><JobSearchBar/>
      </div> */}
        <div className="flex py-5 gap-4 items-center justify-center ">
            <JobHeader/><JobSearchBar/>
        </div>
        <div className="flex gap-4 ">
            <div className="md:w-1/2 md:pl-28 ">
               <JobList/> 
            </div>
            <div className="md:w-1/2 md:pr-16 hidden md:inline">
             <JobDescription/>   
            </div>
        </div>
    </div>
  )
}
