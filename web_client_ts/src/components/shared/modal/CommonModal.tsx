import { ModalProps } from '../../../@types/interfaces/props/ModalProps';
import { hideModal } from '../../../utils/commonFunctions/HandleModal';

const CommonModal = ({ message, Img, leftButtonText, rightButtontext, leftMethod, rightMethod, id }: ModalProps) => {

  return (
    <div>
      <div id={id} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden">
        <div className="relative px-4 md:px-0 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center " onClick={()=>hideModal(id)}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <img className='h-56 w-56 mx-auto' src={Img} alt="" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 ">{message}</h3>
              <button data-modal-hide="popup-modal" type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
               inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={leftMethod}>
                {leftButtonText}
              </button>
              <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100
               focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium
                px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={rightMethod}>
                {rightButtontext}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonModal
