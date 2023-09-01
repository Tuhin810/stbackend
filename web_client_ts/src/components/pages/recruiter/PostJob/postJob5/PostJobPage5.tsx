import { JobPostPage1Props } from '../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage1Props'


const PostJobPage5 = ({handleChangeJobDetails}:JobPostPage1Props) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="is_target_based_salary" className="block font-medium text-blue-600">Is this a targed based Salaried Job ?</label>
                <select id="is_target_based_salary" name="is_target_based_salary" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeJobDetails(e)}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="any_charges" className="block font-medium text-blue-600">Is there any charges required to apply this job ?</label>
                <select id="any_charges" name="any_charges" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeJobDetails(e)}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
        </div>
    )
}

export default PostJobPage5
