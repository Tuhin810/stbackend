import { SkillListProps } from "../../../../../@types/interfaces/props/SkillListProps"

const SkillList = ({ skillList }: SkillListProps) => {
    return (
        <div>
            <div className="my-2">
                <div className="flex flex-row space-x-1 flex-wrap space-y-1">
                    {
                        (skillList.map((skill, value) => {
                            return (
                                <a key={value} href="#" className="inline-flex items-center justify-center px-3 py-2 text-xs font-sans text-center text-gray-700 bg-zinc-100 rounded-2xl ">
                                    {skill}
                                    <svg className="w-2.5 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            )
                        }))
                    }
                </div>

            </div>

        </div>
    )
}

export default SkillList
