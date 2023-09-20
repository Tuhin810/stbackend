import { ApplicantEducationProps } from "../../../../../@types/interfaces/props/ApplicantEducationProps"
import { showModal } from "../../../../../utils/commonFunctions/HandleModal"
import AddIcon from "../../../../shared/icons/addIcon/AddIcon"
import AddQualificationModal from "../../modals/AddQualificationModal/AddQualificationModal"

const MyQualification = ({ qualificationDetails }: ApplicantEducationProps) => {
    return (
        <div>
            <div className="w-full p-3 flex gap-5 bg-white drop-shadow-xl rounded-3xl min-h-40">
                <div className=" w-full">
                    <div className="p-4">
                    <div className='flex justify-between mb-4 pr-2 sm:pr-10'>
                                <div className="heading text-xl text-black
                              mb-4 font-sans inline-flex  font-semibold">My <span className="text-blue-700 mx-1 ">Qualification</span>
                                </div>

                                <button onClick={() => { showModal('addDegrees') }} type="button">
                                    <AddIcon/>
                                </button>
                            </div>
                        <div className="flex-col md:w-2/4 justify-around">
                        {
                            qualificationDetails.map((qualification, value) => {
                                return (
                                    <div className="flex justify-between mb-2" key={value}>
                                        <div className=""> <h3 className="text-gray-800 font-semibold text-lg flex gap-2">{qualification.qualification.toUpperCase()}</h3>
                                        <p className="text-gray-600">{qualification.inst_name}</p></div>
                                       
                                        <p className="text-gray-700 text-sm font-medium mt-2">From {qualification.from_year} To {qualification.to_year} </p>
                                    </div>
                                )
                            })
                        }
                        </div>


                    </div>
                </div>
            </div>
            <AddQualificationModal />
        </div>
    )
}

export default MyQualification
