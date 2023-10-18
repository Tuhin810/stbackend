import { MyProfileDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import EditIcon from '../../../../shared/icons/editIcon/EditIcon'
import { AddAditionalModal } from '../../modals/AddAditionalModal/AddAditionalModal'

const AdditonalDetails = ({ defaultApplicantDetails }: MyProfileDetailsProps) => {
    return (
        <div>
            <div className="w-full bg-white drop-shadow-xl rounded-3xl px-2 md:px-5 py-8 flex flex-col">
                <div className="deatils px-3">
                    <div className="">
                        <div className="w-full  mx-2 ">
                        <div className='flex justify-between pr-2 sm:pr-10'>
                            <div className="heading text-xl text-black  mb-4 inline-flex items-center font-semibold">Additional <span className="font-semibold text-blue-700 mx-1">Details</span>
                            </div>
                            <button onClick={() => { showModal('updateAdditionalProfile') }}
                                type="button" className="text-black text-xl font-small rounded-md h-8 px-2 text-center inline-flex items-center" >
                                <EditIcon/>
                            </button>
                        </div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">

                            </div>
                            <div className="text-gray-700 text-md">
                                <div className="grid md:grid-cols-2 text-md">
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 text-md py-2 font-semibold">English Profiency</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium">{defaultApplicantDetails?.spoken_english}</div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 text-md py-2 font-semibold">Native Language</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium">{defaultApplicantDetails?.native_language}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 text-md py-2 font-semibold">Experience</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium">{defaultApplicantDetails?.experience_year} yrs.</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 text-md py-2 font-semibold">Min. Expected Salary</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium">{defaultApplicantDetails?.min_expected_salary} LPA</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 text-md py-2 font-semibold">Max. Duty Hours</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium">{defaultApplicantDetails?.min_duty_hours} hrs</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-gray-800 text-md py-2 font-semibold">Physically Disabled</div>
                                        <div className=" py-2 text-gray-700 text-sm font-medium">{defaultApplicantDetails?.is_disabled?"Yes":"No"}</div>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <AddAditionalModal defaultApplicantDetails={defaultApplicantDetails}/>
        </div>
    )
}

export default AdditonalDetails
