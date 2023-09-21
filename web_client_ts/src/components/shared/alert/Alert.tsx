import { AlertProps } from '../../../@types/interfaces/props/AlertProps'

// Test Push
const Alert = ({ text, type ,color,img}: AlertProps) => {
    console.log(type);
    return (
        <div className='alert' id='alert'>
            <div className="flex w-72 max-w-lg overflow-hidden bg-gray-100  rounded-lg shadow-md ">
                <div className={`flex items-center justify-center w-12 bg-${color}-500` }>
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                    </svg>
                </div>

                <div className="px-4 py-2 -mx-3 ">
                    <div className="mx-3 ">
                        <span className={`font-semibold text-${color}-500 `}>Error</span>
                        <p className="text-sm text-gray-800 ">
                            {text}!
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
                <p>{text}</p>
                <span className="absolute inset-y-0 right-0 flex items-center mr-4">
                    <svg className="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </span>
            </div> */}
        </div>
    )
}

export default Alert
