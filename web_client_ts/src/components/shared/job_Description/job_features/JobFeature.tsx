
const JobFeature = () => {
  return (
    <div>
         <div className="pb-10 hidden md:inline"> 
   
   <div className="w-72 h-auto  bg-white drop-shadow-xl border-t rounded-lg p-4">
    
    <div className="flex gap-5 pt-5">
      <div className="experience flex gap-2 items-center font-semibold text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="font-bold" viewBox="0 0 16 16">
      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</svg>
5 - 9 years
      </div>

      <div className="experience flex gap-1 items-center font-semibold text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="font-bold" viewBox="0 0 16 16">
      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>
10-13 Lacs P.A.
      </div>
    </div>

    <div className="experience flex mt-4 gap-2 items-center font-semibold text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="font-bold" viewBox="0 0 16 16">
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>

Calicut/ Kozhikode,Kerala
      </div>
      <div className="flex flex-col mt-6 text-gray-500 ">
        <div className="flex gap-2"><div className="font-semibold text-gray-700">Posted:</div> 1 day ago</div>
        <div className="flex gap-2"><div className="font-semibold text-gray-700">Openings:</div>1</div>
        <div className="flex gap-2"><div className="font-semibold text-gray-700">Applicants:</div>Less than 10</div>

   </div>

    {/* Apply Button */}
  <div className="btn_for_apply px-8 mt-12 ">
    <button className="bg-blue-600 rounded-lg w-full text-white font-semibold py-2">Apply Now</button>
  </div>
   </div>

  

 </div>
    </div>
  )
}

export default JobFeature