import React from 'react'
import { JobPostPage5Props } from '../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage5props'

const PostJobPage5 = ({handleChangeTargetBasedSalaried,handleChangeChargeRequired}:JobPostPage5Props) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="fresher" className="block font-medium text-blue-600">Is this a targed based Salaried Job ?</label>
                <select id="fresher" name="fresher" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeTargetBasedSalaried(e)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="fresher" className="block font-medium text-blue-600">Is there any charges required to apply this job ?</label>
                <select id="fresher" name="fresher" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeChargeRequired(e)}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>
        </div>
    )
}

export default PostJobPage5
