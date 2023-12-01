import EditIcon from '../../../../shared/icons/editIcon/EditIcon'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import { AddBioModal } from '../../modals/AddBioModal/AddBioModal'
import { MyProfileDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps'

export const ApllicantBio = ({ defaultApplicantDetails }: MyProfileDetailsProps) => {
  return (
    <div className="">
    <div className="w-full bg-white drop-shadow-xl rounded-3xl h-auto pb-5 px-2 md:px-5 pt-8">
                <div className="deatils">
                    <div>
                        <div className="w-full ">

                            <div className='flex justify-between mb-4 pr-6 sm:pr-10 pl-3'>
                                <div className="heading text-xl text-black
                              mb-4 font-sans inline-flex  font-semibold">My <span className="text-blue-700 mx-1 ">Bio</span>

                                </div>

                                <button  type="button" onClick={()=>showModal('bio')}>
                                    <EditIcon />
                                </button>
                            </div>
                            
                            <div className="text-gray-700 text-sm px-5 pb-5">
                                <p>{defaultApplicantDetails?.profile_bio}</p>
                            </div>

                            
                           

                        </div>
                    </div>
                </div>
               
            </div>
            <AddBioModal defaultApplicantDetails={defaultApplicantDetails}/>
            </div>
  )
}
