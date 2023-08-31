import React from 'react'
import { MyLeftProfileProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyLeftProfileProps'

const MyLeftProfile = ({ first_name, middle_name, last_name }: MyLeftProfileProps) => {

    let name = "";
    if (middle_name !== undefined) {
        name = first_name + " " + middle_name + " " + last_name;
    }
    else {
        name = first_name + " " + last_name;
    }


    return (
        <div>
            <div className="w-72 max-w-sm bg-white  rounded-xl drop-shadow-xl ">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                        <svg className="w-5 h-5 text-gray-40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
                        </svg>
                    </button>

                    
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-32 h-32 mb-3 rounded-full border-2 shadow-xl shadow-orange-200 border-orange-400 shadow-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
                    <span className="text-sm text-gray-500">Visual Designer</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLeftProfile
