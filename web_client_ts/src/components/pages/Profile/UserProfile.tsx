import NavBar from "../../shared/navbar/NavBar";
import "./profile.css";

const ApplicantProfile = () => {
    return (
<>
            <div className=" my-16 h-screen">

<div className="body flex gap-10 px-32 py-10">
     {/* Right Side  */}
     <div className="right_side ">
        
<div className="w-72 max-w-sm bg-white  rounded-xl drop-shadow-xl ">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
   
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-32 h-32 mb-3 rounded-full border-2 shadow-xl shadow-blue-200 border-blue-400 shadow-lg"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2  shadow-xl
             text-sm font-medium text-center text-white bg-blue-400 rounded-lg 
             hover:bg-blue-500 ">Edit Profile</a>
           
        </div>
    </div>
</div>

       </div>


       {/*RIGHT side  */}
       <div className="w-full flex flex-col gap-7">
        {/* RIGHT TOP  */}
        <div className="w-full flex bg-white drop-shadow-xl rounded-3xl h-72 bg-blue-100 px-5 pt-8 flex flex-col">
              <div className="deatils px-3">
                <div className="">
                <div className="w-full  mx-2 ">

                <div className="heading text-2xl text-gray-800 font-semibold mb-4">Profile Details:</div>
         

    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
      
      
    </div>
    <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">First Name</div>
                <div className="px-4 py-2">Jane</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Last Name</div>
                <div className="px-4 py-2">Doe</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">Female</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">+11 998001001</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Current Address</div>
                <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">Feb 06, 1998</div>
            </div>
        </div>
    </div>

</div></div>
                </div>
            
        </div>
         {/* RIGHT BUTTOM */}
         <div className="w-full flex gap-5">
            <div className="bg-white drop-shadow-xl rounded-xl h-40 w-2/3">
                <div className="p-4">
                <div className="heading text-xl text-gray-800 font-semibold mb-4">Add Skill:</div>
         <div className="flex ga"> 
         <div className="flex  justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
            <div className="text-sm  font-normal leading-none max-w-full flex-initial">xyz!</div>
        </div>   <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
            <div className="text-sm font-normal leading-none max-w-full flex-initial">xyz!</div>
        </div>   <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
            <div className="text-sm font-normal leading-none max-w-full flex-initial">xyz!</div>
        </div>   <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
            <div className="text-sm font-normal leading-none max-w-full flex-initial">xyz!</div>
        </div>
        </div>
        
                </div>
            </div>
            <div className="bg-white drop-shadow-xl rounded-2xl h-40 w-1/3 p-3">
                
                <div className=""><div className=" space-y-2 ">
                                   
                        <div className="flex items-center justify-center w-full mt-3 ">
                            <label className="flex flex-col rounded-lg border-4 border-dashed border-gray-400 w-full h-28 p-10 group text-center">
                                <div className=" text-center flex flex-col items-center justify-center items-center  ">
                                 
                                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                        
                                       </div>
                                    <p className="pointer-none text-gray-500 ">   <label className="text-sm font-bold  text-gray-500  tracking-wide">Upload Resume</label><br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
                                 
                                </div>
                                <input type="file" className="hidden"/>
                            </label>
                        </div>
                    </div></div>
                
            </div>
         </div>
       </div>
</div>
                    
</div>
</>
    )
}

export default ApplicantProfile