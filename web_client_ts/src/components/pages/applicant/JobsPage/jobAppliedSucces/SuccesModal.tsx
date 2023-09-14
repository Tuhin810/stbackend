
export const SuccesModal = () => {
  return (
    <div id="success">
        <div className="hidden sticky top-80 left-72 w-full h-full">
  <div id="modal-bg" className="w-full h-full bg-[#848A97] top-0 absolute hidden"></div>
  <div id="modal-box" className="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-2xl font-medium">Payment Successful</span>
    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur?</p>
    <button id="modal-close" className="p-3 bg-[#4F46E5] rounded-lg w-full text-white">Click Background</button>
  </div>
    </div></div>
  )
}
