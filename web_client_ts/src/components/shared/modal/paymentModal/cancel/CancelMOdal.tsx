import { Link } from "react-router-dom"

export const CancelModal = () => {
  return (
   <>
   <div id="" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ">
                <div className="relative w-full max-w-md max-h-full">

      <div className="bg-white p-6 w-96 md:mx-auto">
        {/* <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg> */}
         <div className="mx-auto w-16 h-16 text-xl rounded-full bg-red-700 text-white flex items-center fles justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="x"><g fill="none" fill-rule="evenodd" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" height={'40px'}><path d="M13 1 1 13M1 1l12 12"></path></g></svg>
        </div>
         <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment incomplete!</h3>
            <p className="text-gray-600 my-2">some error occured during the payment.</p>
            <p> Try again later!  </p>
            <div className="py-10 text-center">
                <Link to="/employer/pricing" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </Link>
            </div>
        </div>
    </div>
  </div>
  </div>
   </>
  )
}
