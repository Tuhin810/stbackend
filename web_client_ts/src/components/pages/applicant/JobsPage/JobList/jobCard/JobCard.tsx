
import Ratings from '../../../../../shared/Rating_stars/Ratings'

export const JobCard = () => {
  return (
    <div>
        <div className="w-full cursor-pointer border-2 bg-white h-72 rounded-lg drop-shadow-md px-5 pt-5">
          <div className="flex justify-between">
            <div className="">
            <div className="text-2xl mb-2 text-gray-800 font-semibold hover:underline mb-3">Sales and Service Engineer</div>
      <div className="company text-sm text-gray-600  ">ORCHID SCIENTIFIC AND INNOVATIVE INDIA PVT LTD</div>
            <div className="">
                <Ratings/>
            </div>
            </div>
               <div className="mt-3 flex justify-end">
                <img className='h-16 w-16 bg-gray-700 border-2 rounded-lg ' src="https://img.naukimg.com/logo_images/groups/v1/275530.gif" alt="" /></div>
        </div>
             <div className="mt-3 flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>Kolkata, West Bengal

        </div> 

        <div className="Features mt-3 px-2 flex-col gap-3">
        <div className="flex gap-4 ">
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>₹25,000 a month </p>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>Full Time </p>
                 </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>Day shift </p>
                </div>
                </div>

                <div className="flex gap-4 mt-2 ">
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>Day shift </p>
                </div>
                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">      
                   <p>5y experience </p>
                 </div>
                
                </div>
                 
            </div>  
            
        </div>
       
    </div>
  )
}
