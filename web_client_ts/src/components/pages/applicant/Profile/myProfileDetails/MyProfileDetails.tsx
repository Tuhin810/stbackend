import { MyProfileDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import EditIcon from '../../../../shared/icons/editIcon/EditIcon'
import { AddProfileModal } from '../../modals/AddProfileDetailModa/AddProfileModal'
const MyProfileDetails = ({ defaultApplicantDetails }: MyProfileDetailsProps) => {
    return (
        <div>
            <div className="w-full bg-white drop-shadow-xl rounded-3xl h-auto pb-5 px-2 md:px-5 pt-8">
                <div className="deatils">
                    <div>
                        <div className="w-full ">

                            <div className='flex justify-between mb-4 pr-6 sm:pr-10 pl-3'>
                                <div className="heading text-xl text-black
                              mb-4 font-sans inline-flex  font-semibold">My <span className="text-blue-700 mx-1 ">Profile</span>

                                </div>

                                <button onClick={() => { showModal('updateprofile') }} type="button">
                                    <EditIcon />
                                </button>
                            </div>
                            


                            <div className="text-gray-700 pb-5">
                            
                                <div className="grid md:grid-cols-2 text-md">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 :py-12 xl:py-2 font-semibold">First Name</div>
                                        <div className="px-4 xl:py-2 ">{(defaultApplicantDetails?.first_name) ? defaultApplicantDetails?.first_name : <><div className="text-blue-500 text-lg" onClick={() => showModal('updateprofile')}>Add</div></>}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 xl:py-2 font-semibold">Last Name</div>
                                        <div className="px-4 xl:py-2">{defaultApplicantDetails?.last_name}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 xl:py-2 font-semibold">Gender</div>
                                        <div className="px-4 xl:py-2">
                                            {(defaultApplicantDetails?.gender) ? defaultApplicantDetails?.gender : <><div className="text-blue-500 text-lg" onClick={() => showModal('updateprofile')}>Add</div></>}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 xl:py-2 font-semibold">Contact No.</div>
                                        <div className="px-4 xl:py-2 xl:text-sm text-xs">
                                            {defaultApplicantDetails?.country_code}
                                            {(defaultApplicantDetails?.phone) ? defaultApplicantDetails?.phone : <>null</>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 xl:py-2 font-semibold">Current Address</div>
                                        <div className="px-4 xl:py-2">
                                            {(defaultApplicantDetails?.current_address) ? defaultApplicantDetails?.current_address : <><div className="text-blue-500 text-lg" onClick={() => showModal('updateprofile')}>Add</div></>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 xl:py-2 font-semibold">Permanant Address</div>
                                        <div className="px-4 xl:py-2">
                                            {(defaultApplicantDetails?.permanent_address) ? defaultApplicantDetails?.permanent_address : <><div className="text-blue-500 text-lg" onClick={() => showModal('updateprofile')}>Add</div></>}

                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:mb-0 mb-10">
                                        <div className="px-4 xl:py-2 font-semibold">Birthday</div>
                                        <div className="px-4 xl:py-2">
                                            {(defaultApplicantDetails?.birth_year) ? defaultApplicantDetails?.birth_year : <>null</>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <AddProfileModal defaultApplicantDetails={defaultApplicantDetails} />

        </div>


    )
}

export default MyProfileDetails
