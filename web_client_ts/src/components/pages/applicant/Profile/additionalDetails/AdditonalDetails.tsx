import React from 'react'
import { AdditionalDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/AdditionalDetailsProps'

const AdditonalDetails = ({ fresher, spoken_english, min_salary, min_duty_hours, experience }: AdditionalDetailsProps) => {
    return (
        <div>
            <div className="w-full bg-white drop-shadow-xl rounded-3xl px-5 py-8 flex flex-col">
                <div className="deatils px-3">
                    <div className="">
                        <div className="w-full  mx-2 ">
                            <div className="heading text-xl text-gray-500 font-semibold mb-4 inline-flex items-center mb-5">Additional<span className="text-blue-500 mx-1"> Details</span>
                             
                            </div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">


                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 font-semibold text-lg py-2 font-semibold">Fresher:</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium mt-2">{(fresher) ? "Yes" : "No"}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 font-semibold text-lg py-2 font-semibold">English Profiency</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium mt-2">{(spoken_english)?"Yes":"No"}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 font-semibold text-lg py-2 font-semibold">Min. Expected Salary</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium mt-2">{min_salary} LPA</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 font-semibold text-lg py-2 font-semibold">Max. Duty Hours</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium mt-2">{min_duty_hours} hrs</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 font-semibold text-lg py-2 font-semibold">Experience</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium mt-2">{experience} yrs.</div>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdditonalDetails
