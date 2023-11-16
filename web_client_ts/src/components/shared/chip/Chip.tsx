import { ChipProps } from "../../../@types/interfaces/props/ChipProps/ChipProps"

const Chip = ({element}:ChipProps) => {
  return (
    <div className="mx-2 flex justify-center items-center m-1 py-1 px-3
    rounded-xl  border bg-orange-100 border-orange-400 text-gray-900 w-fit">
        <div className="  flex-col leading-none max-w-full  text-gray-900 ">{element}</div>
       
    </div>
  )
}

export default Chip