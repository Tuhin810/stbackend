const RefreshButton = () => {
  return (
    // <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2">
      
    //   Refresh</button>
    <>
    <button onClick={()=>window.location.reload()}><img className="h-7 w-7 mr-9 md:mr-3 md:h-10 md:w-10" src="https://img.icons8.com/?size=96&id=80951&format=png" alt="" /></button>
    </>
  )
}

export default RefreshButton