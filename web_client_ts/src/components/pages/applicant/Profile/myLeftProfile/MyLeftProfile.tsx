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
            <div className="w-72 max-w-sm bg-white rounded-xl drop-shadow-xl ">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                        <svg className="w-5 h-5 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z" />
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
