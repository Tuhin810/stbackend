// import React from 'react'

import { JobProps } from "../../../../../../@types/interfaces/props/JobProps/JobProps"

export const AcceptedJobsCard = ({ job_details}:JobProps) => {
  return (
    <div>

<li className="mt-2">

<a
  className="p-5 flex flex-col justify-between
bg-gray-100 dark-bg-gray-200 rounded-lg"
  href="#">

  <div
    className="flex items-center justify-between
font-semibold capitalize dark-text-gray-700">


    <span>{job_details.job_title}</span>

    <div className="flex items-center">
      <img className='h-5 w-5 mr-2' src="https://img.icons8.com/?size=48&id=121796&format=png" alt="" />
      <span>₹{job_details.min_salary} - ₹{job_details.max_salary}</span>
    </div>

  </div>

  <p
    className=" font-medium leading-snug text-xs md:text-md
text-gray-600 my-3">
{ job_details?.job_description}
  </p>

  <div className="flex justify-between">


    <div className="flex">
      <img
        className="h-7 w-7 border rounded-lg mr-3"
        src="data:image/png;base64,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"
        alt="" />
      <span>
        
        XYZ company
      </span>
    </div>

    <p
      className="text-sm font-medium leading-snug
text-gray-600">
      14 hours ago
    </p>

  </div>

</a>
</li>
    </div>
  )
}
