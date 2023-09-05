import { NotFoundProps } from "../../../@types/interfaces/props/NotFoundProps"
import { notFound } from "../../../assets/images"



const NotFound = ({ message }: NotFoundProps) => {
    return (
        <div className="flex justify-center min-h-screen align-middle">
            <div className="text-center">
                <img className="w-100" src={notFound} />
                <h2 className="text-2xl italic font-sans font-normal">{message}</h2>
            </div>
        </div>
    )
}

export default NotFound
