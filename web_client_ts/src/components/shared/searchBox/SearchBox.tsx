

const SearchBox = () => {
  return (
      <div className='md:px-0 px-4'>
    <div className="p-4 px-4 bg-white shadow-lg rounded-2xl mt-5 flex gap-3">
      <div className="flex-1 w-[95%] bg-gray-100 rounded-3xl p-3 flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="mt-1 text-gray-600" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        <input className=' w-[95%] bg-gray-100  focus-none outline-none' type="text" placeholder='Search by Jobs/Skill/Company/Location' />
        
        </div>

      
        <div className="  h-16 w-36 text-white ">
    <div className=" h-16 w-36 bg-gradient-to-br flex justify-center items-center from-blue-400 to-blue-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition duration-0 hover:duration-150  items-center rounded-xl shadow-2xl  cursor-pointer absolute">
  <a className="text-center  text-white font-semibold   flex justify-content items-center">Search</a>
    </div>
    </div>


    </div>

      </div>
  )
}

export default SearchBox
