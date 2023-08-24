import { JobPostPage1Props } from "../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage1Props"

const PostJobPage1 = ({handleChangeJobTitle,handleChangeJobType,handleChangeJobDescription}:JobPostPage1Props) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="jobTitle" className="block font-medium text-blue-600">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=>handleChangeJobTitle(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="jobType" className="block font-medium text-blue-600">Job Type</label>
                <select id="jobType" name="jobType" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=>handleChangeJobType(e)}>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="jobDescription" className="block font-medium text-blue-600">Job Description</label>
                <textarea id="jobDescription" name="jobDescription" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e)=>handleChangeJobDescription(e)}></textarea>
            </div>

        </div>
    )
}

export default PostJobPage1
