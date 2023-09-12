import { MySkillProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MySkillProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import AddIcon from '../../../../shared/icons/addIcon/AddIcon'
import AddSkillModal from '../../modals/AddSkillModal/AddSkillModal'

const MySkill = ({ skillList }: MySkillProps) => {
    return (
        <div>
            <div className="w-full p-3 flex gap-5 bg-white drop-shadow-xl rounded-3xl min-h-40">
                <div className=" w-full">
                    <div className="p-4">
                        <div className='flex justify-between pr-10'>
                            <div className="heading text-xl text-black  mb-4 inline-flex items-center font-semibold">My <span className="font-semibold text-blue-700 mx-1">Skills</span>

                            </div>

                            <button onClick={() => { showModal('addSkills') }}
                                type="button" className="text-black text-xl border border-blue-600 font-small rounded-md h-8 px-2 text-center inline-flex items-center" >
                                <AddIcon/>
                            </button>
                        </div>
                        <div className="md:flex md:flex-row  w-3/4">
                            {
                                skillList.map((skill, value) => {
                                    return (
                                        <div key={value} className="flex  justify-center items-center m-1  py-1 px-3  
                                        rounded-xl  border bg-orange-100 border-orange-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">{skill}</div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <AddSkillModal />
        </div>
    )
}

export default MySkill
