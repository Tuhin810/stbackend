import { ApplicantExperienceProps } from "../../../../../@types/interfaces/props/ApplicantExp"
import { showModal } from "../../../../../utils/commonFunctions/HandleModal"
import AddIcon from "../../../../shared/icons/addIcon/AddIcon"
import AddExpModal from "../../modals/AddExpModal/AddExpModal"

export const MyExperience = ({ Experience }:ApplicantExperienceProps) => {
  return (
    <div>

<div className="w-full p-3 flex gap-5 bg-white drop-shadow-xl rounded-3xl min-h-40">
                <div className=" w-full">
                    <div className="p-4">
                    <div className='flex justify-between mb-4 pr-2 sm:pr-10'>
                                <div className="heading text-xl text-black
                              mb-4 font-sans inline-flex  font-semibold">My <span className="text-blue-700 mx-1 ">Experience</span>
                                </div>

                                <button  type="button" onClick={()=>showModal('addExp')}>
                                    <AddIcon/>
                                </button>
                            </div>
                        <div className="flex-col md:w-3/4 justify-around">
                        {
                            Experience?.map((experience:any, value:any) => {
                                return (
                                    <div className="flex justify-between mb-2" key={value}>
                                        <div className=""> <h3 className="text-gray-800 font-semibold text-lg flex gap-2">{experience?.job_role}</h3>
                                        <p className="text-gray-600">{experience?.company}</p></div>
                                       
                                        <p className="text-gray-700 text-sm font-medium mt-2">From {experience?.start_year} </p>
                                        <p className="text-gray-700 text-sm font-medium mt-2">{(experience?.end_year)?<>To ${experience?.end_year}</>:<>Currently working</>} </p>
                                    </div>
                                )
                            })
                        }
                        </div>


                    </div>
                </div>
            </div>
            <AddExpModal/>
    </div>
  )
}
