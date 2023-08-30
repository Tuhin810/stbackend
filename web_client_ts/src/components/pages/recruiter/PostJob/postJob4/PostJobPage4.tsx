import { JobPostPage4Props } from "../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage4Props"

const PostJobPage4 = ({ handleChangeFresher, handleChangeVacancy, handleChangeDutyHours, handleChangeSpokenEnglish }: JobPostPage4Props) => {
    return (
        <div>
            <div>

                <div className="mb-4">
                    <label htmlFor="fresher" className="block font-medium text-blue-600">Freshers are Allowed ?</label>
                    <select id="fresher" name="fresher" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e => handleChangeFresher(e)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="mb-4 flex">
                    <div className="w-1/2 pr-2">
                        <label htmlFor="vacancy" className="block font-medium text-blue-600">No of Vacnacy</label>
                        <input type="number" id="vacancy" name="vacancy" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e => handleChangeVacancy(e)} />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label htmlFor="duty" className="block text-gray-700 text-sm font-medium mb-1">Duty Hours</label>
                        <input type="number" id="duty" name="duty" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={e => handleChangeDutyHours(e)} />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="spoken_english" className="block font-medium text-blue-600">Is Spoken English Mandatory?</label>
                    <select id="spoken_english" name="spoken_english" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e => handleChangeSpokenEnglish(e)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>



            </div>
        </div >
    )
}

export default PostJobPage4
