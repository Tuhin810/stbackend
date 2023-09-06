import { JobPostPage1Props } from "../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage1Props"

const PostJobPage1 = ({handleChangeJobDetails}:JobPostPage1Props) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="job_title" className="block font-medium text-blue-600">Job Title</label>
                <input type="text" id="job_title" name="job_title" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=>handleChangeJobDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="job_type" className="block font-medium text-blue-600">Job Type</label>
                <select id="job_type" name="job_type" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=>handleChangeJobDetails(e)}>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="job_description" className="block font-medium text-blue-600">Job Description</label>
                <textarea id="job_description" name="job_description" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=>handleChangeJobDetails(e)}></textarea>
            </div>
        </div>
    )
}

export default PostJobPage1
