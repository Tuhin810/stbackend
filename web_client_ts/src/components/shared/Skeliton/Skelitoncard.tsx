import React from 'react'

export const Skelitoncard = () => {
  return (
    <div><div className=''>
    
<div className="w-full cursor-pointer border-2 bg-white h-72 rounded-lg drop-shadow-md px-5 pt-5 flex flex-col ">
    <div className="flex justify-between">
          <div className="bg-gray-200 h-10 sm:h-full sm:w-72 rounded-xl animate-pulse">
    </div>
    <div className="bg-gray-200 animate-pulse h-16 w-16  border-2 rounded-lg"></div>
            
    </div>
  
    <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-col flex-1 gap-3">
            <div className="w-3/4 bg-gray-200 animate-pulse h-8 rounded-2xl">
            </div>
            
         <div className="flex gap-3 ">
            <div className="w-20 h-8 bg-gray-200 rounded-lg animate-pulse">
            </div>
            <div className="w-20 h-8 bg-gray-200 rounded-lg animate-pulse">
            </div>
            <div className="w-20 h-8 ml-auto bg-gray-200 rounded-lg animate-pulse">
            </div>
        </div>
        <div className="flex gap-3 ">
            <div className="w-20 h-8 bg-gray-200 rounded-lg animate-pulse">
            </div>
            <div className="w-20 h-8 bg-gray-200 rounded-lg animate-pulse">
            </div>
            
        </div>
        
    </div> 
        </div>
       
</div>

  </div></div>
  )
}
