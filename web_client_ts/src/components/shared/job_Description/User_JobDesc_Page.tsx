
import JobFeature from './job_features/JobFeature'
import JobDescription from './JobDescription/JobDescription'

export const User_JobDesc_Page = () => {
  return (
    <div>
        <div className="flex md:px-12 py-8 my-20 gap-1">
       <JobDescription/>
        <JobFeature/>
      </div>
    </div>
  )
}
