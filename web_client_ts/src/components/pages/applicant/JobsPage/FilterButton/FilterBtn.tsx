import React from 'react'

export const FilterBtn = () => {
    return (
        <div>
            <a href="#_" className="inline-flex overflow-hidden drop-shadow-md text-gray-700 font-semibold bg-white rounded group">
                <span className="p-1 px-2 text-white bg-[#e9f1f4] group-hover:bg-blue-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" className="bi bi-filter-right" viewBox="0 0 16 16">
                        <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                </span>
                <span className="pl-4 pr-5 py-2.5">Sort By</span>
            </a>
            {/* <a href="#_" className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-md hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-filter-right" viewBox="0 0 16 16">
                        <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                       </svg>  </span>
                <span className="relative">Sort By</span>
            </a> */}
        </div>
    )
}
