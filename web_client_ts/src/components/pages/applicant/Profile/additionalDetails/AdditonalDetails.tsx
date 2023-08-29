import React from 'react'
import { AdditionalDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/AdditionalDetailsProps'

const AdditonalDetails = ({ fresher, spoken_english, min_salary, min_duty_hours, experience }: AdditionalDetailsProps) => {
    return (
        <div>
            <div className="w-full bg-white drop-shadow-xl rounded-3xl px-5 py-8 flex flex-col">
                <div className="deatils px-3">
                    <div className="">
                        <div className="w-full  mx-2 ">
                            <div className="heading text-xl text-gray-800 font-semibold mb-4 inline-flex items-center">Additional<span className="text-blue-700 mx-2"> Details :</span>
                                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
                                </svg>
                            </div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">


                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Fresher:</div>
                                        <div className="px-4 py-2">{(fresher) ? "Yes" : "No"}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">English Profiency</div>
                                        <div className="px-4 py-2">{(spoken_english)?"Yes":"No"}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Min. Expected Salary</div>
                                        <div className="px-4 py-2">{min_salary} LPA</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Max. Duty Hours</div>
                                        <div className="px-4 py-2">{min_duty_hours} hrs</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Experience</div>
                                        <div className="px-4 py-2">{experience} yrs.</div>
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
