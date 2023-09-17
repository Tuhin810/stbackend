
export const Tooltip = ({con}:any) => {
  return (
   <>
        
        <span className="">
    <svg data-popover-target="clicks-info" data-popover-placement="bottom" className="w-3 h-3 text-gray-400 hover:text-gray-900 -hover:text-white cursor-pointer ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
 </svg>
    </span>
    <span className="group-hover:opacity-100 w-56 -mt-16 absolute transition-opacity py-1 text-center bg-gray-700 shadow-2xl px-1 text-sm text-gray-100 rounded-md  left-1/2 
    -translate-x-1/2 translate-y-full opacity-0  mx-auto">
        <div className="">{con}</div>
        <svg className="absolute text-gray-700 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
   </span>
</>
  
  )
}
