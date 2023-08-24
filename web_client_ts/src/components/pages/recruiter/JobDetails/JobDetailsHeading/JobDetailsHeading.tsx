import Show from '../JobDetailsShow/Show'
import JobDetailsSidebar from '../JobDetailsShow/JobDetailsSidebar'

const JobDetailsHeading = () => {
  return (
    <div className='mt-24 w-[154%] lg:w-full px-20 bg-[#f5f9ff] '>
      <div
        className=" layout profilo bg-white mx-auto rounded-xl m-4 shadow-xl overflow-hidden"
      >
        <div className="relative h-48 ">
          <img
            className="absolute bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 inset-0 w-full h-full object-cover object-center darken-image"
            src=""
            alt="Cover"
          />
        </div>
        <div className="relative -mt-[3.5rem] px-4 pb-4">
          <div className="flex justify-between">
            <div className='pl-5'>
              <img
                className="w-32 h-32 rounded-xl  border-white bg-gray-500 object-cover object-center  "
                src=""
                alt=""
              />
              <div className="mt-2">
                <div className="text-2xl text-gray-900 font-semibold font-sans ">
                  Senior Designer</div>
                <div className="text-xl text-gray-600 font-semibold font-sans flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="text-gray-600" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Chicago</div></div>
            </div>
          </div>
        </div>
        <div className="pr-12 pb-8 flex justify-end">
          <div className="w-32 rounded-lg px-5 py-3 
    bg-gradient-to-br from-red-400 to-red-600 flex justify-center items-center gap-2 text-gray-100 font-medium ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>Delete</div>
        </div>
      </div>
      <div className="flex gap-1 mt-12">
        <Show />
        <JobDetailsSidebar />
      </div>
    </div>
  )
}

export default JobDetailsHeading