import { MyProfileDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import { AddProfileModal } from '../../modals/AddProfileDetailModa.tsxl/AddProfileModal'
const MyProfileDetails = ({ first_name, middle_name, last_name, gender, country_code, phone, current_address,permanent_address, birthday }: MyProfileDetailsProps) => {
    return (
        <div>
            <div className="w-full bg-white drop-shadow-xl rounded-3xl h-auto md:h-72 px-9 md:px-5 pt-8">
                <div className="deatils">
                    <div>
                        <div className="w-full ">

                        <div className='flex justify-between mb-4 pr-10 pl-3'>
                            <div className="heading text-xl text-gray-500
                              mb-4 font-sans inline-flex  font-semibold">My <span className="text-blue-500 mx-1 ">Profile</span>
                               
                            </div>
                           
                            <button   onClick={() => { showModal('updateprofile') }}
                             type="button" className="text-white text-xl border border-blue-100 font-small rounded-md bg-blue-400   h-8 px-2 text-center inline-flex items-center" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                               <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
             </svg>
                                Edit
                            </button>
                        </div>

                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">


                            </div>
                            <div className="text-gray-700 ">
                                <div className="grid md:grid-cols-2 text-md">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">First Name</div>
                                        <div className="px-4 py-2 ">{first_name}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Last Name</div>
                                        <div className="px-4 py-2">{last_name}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Gender</div>
                                        <div className="px-4 py-2">{gender}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                                        <div className="px-4 py-2">{country_code} {phone}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Current Address</div>
                                        <div className="px-4 py-2">{current_address}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                        <div className="px-4 py-2">{permanent_address}</div>
                                    </div>

                                    <div className="grid grid-cols-2 md:mb-0 mb-10">
                                        <div className="px-4 py-2 font-semibold">Birthday</div>
                                        <div className="px-4 py-2">{birthday}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
           
             <AddProfileModal first_name={first_name} last_name={last_name}
             middle_name={middle_name}
                phone={phone} current_address={current_address} permanent_address={permanent_address}
                birthday={birthday} gender={''} country_code={''} email={''} />  
           
          
            
        </div>


    )
}

export default MyProfileDetails
