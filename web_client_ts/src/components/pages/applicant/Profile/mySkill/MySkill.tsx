import { MySkillProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MySkillProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import Chip from '../../../../shared/chip/Chip'
import AddIcon from '../../../../shared/icons/addIcon/AddIcon'
import AddSkillModal from '../../modals/AddSkillModal/AddSkillModal'

const MySkill = ({ skillList }: MySkillProps) => {
    return (
        <div>
            <div className="w-full p-3 flex gap-5 bg-white drop-shadow-xl rounded-3xl min-h-40">
                <div className=" w-full">
                    <div className="p-4">
                        <div className='flex justify-between pr-1 sm:pr-10'>
                            <div className="heading text-xl text-black  mb-4 inline-flex items-center font-semibold">My <span className="font-semibold text-blue-700 mx-1">Skills</span>

                            </div>

                            <button onClick={() => { showModal('addSkills') }}
                                type="button" className="text-black text-xl font-small rounded-md h-8 px-2 text-center inline-flex items-center" >
                                <AddIcon/>
                            </button>
                            
                        </div>
                        <div className=" flex flex-wrap  w-3/4">
                            {
                                skillList.map((skill, value) => {
                                    return (
                                       <Chip key={value} element={skill}/>
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
