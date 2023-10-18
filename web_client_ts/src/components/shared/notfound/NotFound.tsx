import { NotFoundProps } from "../../../@types/interfaces/props/NotFoundProps"
import { job_not_found } from "../../../assets/images"



const NotFound = ({ message }: NotFoundProps) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen align-middle">
            <img className="w-full sm:w-1/2" src={job_not_found} />
            <div className="text-center">
                <h2 className="text-2xl uppercase font-semibold tracking-wide font-sans">{message}</h2>
            </div>
        </div>
    )
}

export default NotFound
