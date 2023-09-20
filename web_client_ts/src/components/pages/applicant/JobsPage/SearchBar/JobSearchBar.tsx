 
export const JobSearchBar = () => {
  return (
   
       
<div className="w-full  ">
        <div className="flex justify-center pb-5">
            <div className="w-full ">
                <div className="bg-white shadow-md rounded-lg px-3 py-2 ">
                    <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                        Search
                    </div>
                    <div className="flex items-center bg-gray-100 rounded-md ">
                        <div className="pl-2">
                            <svg className="fill-current text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path className="heroicon-ui"
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </div>
                        <input
                            className="w-full rounded-md bg-gray-100 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                            id="search" type="text" placeholder="Search teams or members"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}
