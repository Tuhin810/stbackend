const AddIcon = () => {
    return (
        
        <div id="plus_icon" className="group relative px-4 cursor-pointer">
        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
        </div>
        <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Add
        </span>
    </div>
    )
}

export default AddIcon