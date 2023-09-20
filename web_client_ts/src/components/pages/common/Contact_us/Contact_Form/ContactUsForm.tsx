const ContactUsForm = () => {
  return (
    <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
    <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
      <div className="w-20 h-20 relative mr-5">
        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
        <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
        </div>
      </div>
      <div className="w-10/12">
        <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Fraud Report</h2>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">+91 9876543210</p>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">fraud@starmarks.in</p>
      </div>
    </div>
    <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
      <div className="w-20 h-20 relative mr-5">
        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
        <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
        </div>
      </div>
      <div className="w-10/12">
      <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Payment Issue</h2>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">+91 9876543210</p>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">payment@starmarks.in</p>
      </div>
    </div>
    <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
      <div className="w-20 h-20 relative mr-5">
        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
        <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
        </div>
      </div>
      <div className="w-10/12">
      <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Technical Bugs</h2>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">+91 9876543210</p>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">technical@starmarks.in</p>
      </div>
    </div>
    <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
      <div className="w-20 h-20 relative mr-5">
        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
        <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
        </div>
      </div>
      <div className="w-10/12">
      <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Other Enquiry</h2>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">+91 9876543210</p>
        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">enquiry@starmarks.in</p>
      </div>
    </div>
  </div>
  )
}

export default ContactUsForm