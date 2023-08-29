import React from 'react'
import { MySkillProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MySkillProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import AddSkillModal from '../../AddSkillModal/AddSkillModal'

const MySkill = ({ skillList }: MySkillProps) => {
    return (
        <div>
            <div className="w-full p-3 flex gap-5 bg-white drop-shadow-xl rounded-xl min-h-40">
                <div className=" w-full">
                    <div className="p-4">
                        <div className='flex justify-between'>
                            <div className="heading text-xl text-gray-800 font-semibold mb-4 inline-flex items-center">My <span className="text-blue-700 mx-2">Skill</span>
                                <svg className="w-4 h-4 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
                                </svg>
                            </div>
                            <button type="button" className="text-blue-700 border border-blue-700 font-small rounded-full text-sm h-8 px-2 text-center inline-flex items-center" onClick={() => { showModal('addSkills') }}>
                                <svg className="w-3 h-3 me-1 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                                Add
                            </button>
                        </div>
                        <div className="flex">
                            {
                                skillList.map((skill, value) => {
                                    return (
                                        <div key={value} className="flex  justify-center items-center m-1 font-medium py-1 px-2 text-orange-500 rounded-full bg-red-50 border border-red-300">
                                            <div className="text-sm  font-normal leading-none max-w-full flex-initial">{skill}</div>
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
