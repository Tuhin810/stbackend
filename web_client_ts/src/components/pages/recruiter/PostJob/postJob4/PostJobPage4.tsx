import { JobPostPage1Props } from "../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage1Props"

const PostJobPage4 = ({ handleChangeJobDetails}: JobPostPage1Props) => {
    return (
        <div>
            <div>
            <div className="mb-4">
                    <label htmlFor="gender" className="block font-medium text-blue-600">Gender</label>
                    <select id="gender" name="gender" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeJobDetails(e)}>
                        <option value="male">Only Male</option>
                        <option value="female">Only Female</option>
                        <option value="all">All Genders are allowed</option>
                    </select>
            </div>
                <div className="mb-4 flex">
                    <div className="w-1/2 pr-2">
                        <label htmlFor="no_of_vacancy" className="block font-medium text-blue-600">No of Vacnacy</label>
                        <input type="number" id="no_of_vacancy" name="no_of_vacancy" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e => handleChangeJobDetails(e)} />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label htmlFor="duty_hours" className="block text-gray-700 text-sm font-medium mb-1">Duty Hours</label>
                        <input type="number" id="duty_hours" name="duty_hours" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={e => handleChangeJobDetails(e)} />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="spoken_english_level" className="block font-medium text-blue-600">Spoken English Level</label>
                    <select id="spoken_english_level" name="spoken_english_level" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e => handleChangeJobDetails(e)}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="fluent">Fluent</option>
                    </select>
                </div>
            </div>
        </div >
    )
}

export default PostJobPage4
