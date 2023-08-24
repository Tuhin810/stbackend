import { JobPostPage3Props } from '../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage3Props'

const PostJobPage3 = ({handleChangeLocation,handleChangeAge,handleChangeGender,handleChangeSalary,handleChangeExperience}:JobPostPage3Props) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="location" className="block font-medium text-blue-600">Job Location</label>
                <input type="text" id="location" name="location" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
            </div>

            <div className="mb-4 flex">
                <div className="w-1/2 pr-2">
                    <label htmlFor="jobTitle" className="block font-medium text-blue-600">Age Limit</label>
                    <input type="number" id="jobTitle" name="jobTitle" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeAge(e)}/>
                </div>
                <div className="w-1/2 pl-2">
                    <label htmlFor="gender" className="block font-medium text-blue-600">Gender</label>
                    <select id="gender" name="gender" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeGender(e)}>
                        <option value="male">Only Male</option>
                        <option value="female">Only Female</option>
                        <option value="all">All Genders are allowed</option>
                    </select>
                </div>
            </div>

            <div className="mb-4 flex">
                <div className="w-1/2 pr-2">
                    <label htmlFor="salary" className="block font-medium text-blue-600">CTC (LPA)</label>
                    <input type="number" id="salary" name="salary" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeSalary(e)}/>
                </div>
                <div className="w-1/2 pl-2">
                    <label htmlFor="experience" className="block text-gray-700 text-sm font-medium mb-1">Experience</label>
                    <input type="number" id="experience" name="experience" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={e=>handleChangeExperience(e)}/>
                </div>
            </div>
        </div>
    )
}

export default PostJobPage3
