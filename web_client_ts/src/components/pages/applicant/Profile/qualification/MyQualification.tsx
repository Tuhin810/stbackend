import { ApplicantEducationProps } from "../../../../../@types/interfaces/props/ApplicantEducationProps"
import { showModal } from "../../../../../utils/commonFunctions/HandleModal"
import AddQualificationModal from "../../modals/AddQualificationModal/AddQualificationModal"

const MyQualification = ({ qualificationDetails }: ApplicantEducationProps) => {
    return (
        <div>
            <div className="w-full p-3 flex gap-5 bg-white drop-shadow-xl rounded-3xl min-h-40">
                <div className=" w-full">
                    <div className="p-4">
                        <div className='flex justify-between mb-5 pr-10'>
                            <div className="heading text-xl text-gray-500 font-semibold mb-4 inline-flex items-center">My <span className="text-blue-500 mx-1">Degrees</span>
                               
                            </div>
                       
                            <button   onClick={() => { showModal('addDegrees') }}
                             type="button" className="text-white text-xl border border-blue-100 font-small rounded-md bg-blue-400   h-8 px-2 text-center inline-flex items-center" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
                                Add
                            </button>
                        </div>
                        <div className="flex-col md:w-2/4 justify-around">
                        {
                            qualificationDetails.map((qualification, value) => {
                                return (
                                    <div className="flex justify-between mb-2" key={value}>
                                        <div className=""> <h3 className="text-gray-800 font-semibold text-lg flex gap-2">{qualification.qualification}</h3>
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
