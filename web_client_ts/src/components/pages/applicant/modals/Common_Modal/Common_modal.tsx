import { hideModal } from "../../../../../utils/commonFunctions/HandleModal";

export const Common_modal = () => {

    const closeModal = () => {
        hideModal("profilepic");
        
    }
  return (
    <div>
          <div id="profilepic" className="min-w-screen h-screen z-50 hidden px-4 md:px-0 animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-coverfixed  bg-black bg-opacity-50 ">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow darkno:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex
                         justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" onClick={closeModal}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                      

                    </div>
                </div>
            </div>
    </div>
  )
}
