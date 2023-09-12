import { MySkillProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MySkillProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import AddSkillModal from '../../modals/AddSkillModal/AddSkillModal'

const MySkill = ({ skillList }: MySkillProps) => {
    return (
        <div>
            <div className="w-full p-3 flex gap-5 bg-white drop-shadow-xl rounded-3xl min-h-40">
                <div className=" w-full">
                    <div className="p-4">
                        <div className='flex justify-between pr-10'>
                            <div className="heading text-xl text-gray-500  mb-4 inline-flex items-center font-semibold">My 
                            <span className="font-semibold text-blue-500 mx-1">Skills</span>
                            
                            </div>
                           
                            <button   onClick={() => { showModal('addSkills') }}
                             type="button" className="text-white text-xl border border-blue-100
                              font-small rounded-md bg-blue-400   h-8 px-2 text-center inline-flex items-center" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
                                Add
                            </button>
                        </div>
                        <div className="md:flex md:flex-row  w-3/4">
                            {
                                skillList.map((skill, value) => {
                                    return (
                                        <div key={value} className="flex  justify-center items-center m-1  py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
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
