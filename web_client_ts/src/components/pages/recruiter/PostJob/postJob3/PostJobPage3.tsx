import { JobPostPage1Props } from '../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage1Props'

const PostJobPage3 = ({handleChangeJobDetails}:JobPostPage1Props) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="location" className="block font-medium text-blue-600">Job Location</label>
                <input type="text" id="location" name="location" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
            </div>

            <div className="mb-4 flex">
                <div className="w-1/2 pr-2">
                    <label htmlFor="min_age_limit" className="block font-medium text-blue-600">Min Age</label>
                    <input type="number" id="min_age_limit" name="min_age_limit" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeJobDetails(e)}/>
                </div>
                <div className="w-1/2 pr-2">
                    <label htmlFor="max_age_limit" className="block font-medium text-blue-600">Max Age</label>
                    <input type="number" id="max_age_limit" name="max_age_limit" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeJobDetails(e)}/>
                </div>
            </div>
            <div className="mb-4 flex">
                <div className="w-1/2 pr-2">
                    <label htmlFor="min_salary" className="block font-medium text-blue-600">Min Salary (CTC)</label>
                    <input type="number" id="min_salary" name="min_salary" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeJobDetails(e)}/>
                </div>
                <div className="w-1/2 pr-2">
                    <label htmlFor="max_salary" className="block font-medium text-blue-600">Max Salary (CTC)</label>
                    <input type="number" id="max_salary" name="max_salary" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeJobDetails(e)}/>
                </div>
            </div>
            <div className="mb-4 flex">
                <div className="w-1/2 pl-2">
                    <label htmlFor="min_experience_year" className="block text-gray-700 text-sm font-medium mb-1">Min Exp.</label>
                    <input type="number" id="min_experience_year" name="min_experience_year" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={e=>handleChangeJobDetails(e)}/>
                </div>
                <div className="w-1/2 pl-2">
                    <label htmlFor="max_experience_year" className="block text-gray-700 text-sm font-medium mb-1">Max Exp.</label>
                    <input type="number" id="max_experience_year" name="max_experience_year" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={e=>handleChangeJobDetails(e)}/>
                </div>
            </div>
        </div>
    )
}

export default PostJobPage3
