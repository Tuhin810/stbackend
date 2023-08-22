import "./advr.css"

function Advertisement() {
  return (
    <div>
        <main className="flex py-10 w-full items-center justify-center ">

    <article className="group relative flex h-[12rem] w-[50rem] overflow-hidden rounded-2xl bg-gray-200 shadow-xl">
       
        <aside className="absolute right-0 flex h-full flex-col justify-center space-y-8 p-3">
  
          
        </aside>

       
        <div className="absolute inset-y-0 left-0 w-48">
            <img src="https://unsplash.it/id/1/640/425" alt="" className="h-full w-full object-cover object-center opacity-95" />

            <div className="invisible absolute inset-0 flex h-full w-full items-center justify-center bg-white/70 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <svg className="h-w-14 w-14 cursor-pointer text-gray-800 transition-all hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

     
        <div className="absolute inset-y-0 left-44 w-[39rem] overflow-hidden rounded-2xl transition-all group-hover:w-[36rem]">
          
            <div className="h-full w-full bg_img bg-cover bg-center">
                <div className="h-full w-full bg-white/80 transition-all group-hover:bg-white/80"></div>
            </div>

         
            <section className="absolute inset-0 flex flex-col justify-between p-4 text-gray-800 pl-10">
                <header className="space-y-1">
                    <div className="text-3xl font-medium">Advertisement</div>
                    <div className="font-medium">by starmark</div>
                    <div className="text-sm">
                      
                        <a href="#" className="text-[#96bacc] transition-all hover:text-yellow-400">....</a>
                    </div>
                </header>

                

                <div className="flex space-x-2">
                    <span className="rounded-full bg-blue-500 px-2 font-medium text-gray-100">Advertisement</span>
                    <div className="flex items-center space-x-1">
                        <span className="h-5 w-2 rounded-full bg-red-500"></span>
                        <span className="h-5 w-2 rounded-full bg-green-500"></span>
                        <span className="h-5 w-2 rounded-full bg-yellow-500"></span>
                    </div>
                </div>
            </section>
        </div>
    </article>
</main>
    </div>
  )
}

export default Advertisement