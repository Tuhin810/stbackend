import { JobCard } from "./jobCard/JobCard"
import "../JobPage.css"

export const JobList = () => {
  return (
    <div>
      
        <div className="flex  flex-col gap-3 px-6 h-screen overflow-y-scroll hidescroll">
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>

        </div>
    </div>
  )
}
