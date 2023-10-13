import performancepage from "../../../../../assets/images/perfm.png"
export const ApplicantPerformanceSidebar = () => {
  return (
    <aside className="flex flex-col hidden  drop-shadow-xl bg-gray-50 md:inline w-96 h-screen px-5 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l dark-:bg-gray-900 dark-:border-gray-700">
   
<div className="py-5 pl-5">
<div className="text-3xl text-gray-800 font-semibold">Hello,</div>
<div className="text-3xl text-gray-800 ml-2 font-semibold">Tuhin</div>
</div>
    <div className="flex flex-col justify-between  mt-6">
 
    <div className="">
            <div className="p-3 bg-white border-2 rounded-lg dark-:bg-gray-800">
                <h2 className="text-lg font-medium text-gray-800 dark-:text-white">Total Accepted Jobs</h2>

                <p className="mt-2   text-gray-500 dark-:text-gray-400">
                    <span className="px-4 py-2 text-md text-blue-50 bg-blue-500 rounded-full">8</span>
                </p>

                 </div>
        </div>
        <div className="mt-16">
            <div className="p-3 bg-gray-100 rounded-lg dark-:bg-gray-800">
                <h2 className="text-sm font-medium text-gray-800 dark-:text-white">New feature availabel!</h2>

                <p className="mt-1 text-xs text-gray-500 dark-:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

            <img className="object-cover mx-auto w-32 h-32  rounded-lg" src={performancepage} alt=""/>
            </div>
        </div>
    </div>
</aside>
  )
}
