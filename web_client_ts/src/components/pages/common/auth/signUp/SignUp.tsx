import "./signup.css"
import img from "../../../../../assets/images/Milestones of business projects-bro.svg"
export const SignUp = () => {
  return (
   <>
   
  <section className="bg-gray-100 darkNObg-gray-900 pb-32">
    
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-100 bg-gray-400 rounded-full darkNObg-gray-800 darkNOtext-white " role="alert">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Flowbite is out! See what's new</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl darkNOtext-white">Join  <span className="text-red-500">Star</span><span
                                                        className="text-indigo-700">Mark</span>,
            Register now !</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 darkNOtext-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nihil illo, commodi ducimus fuga tenetur sapiente veritatis impedit tempora accusantium voluptas quis similique, iure qui itaque ipsam id minus rem dicta aut!.</p>
        <div className="font-bold my-7 text-3xl bg-clip-text text-blue-600">Register as a </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <button className='button'>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Employer</span>
</button>
<button className='button'>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Job Seeker</span>
</button>

          
        </div>
        <div className="flex justify-end">
           <img className='h-72 w-[60%] -mt-40 -mr-[20rem]' src={img} alt="" />
           </div>
       
    </div>
</section>
 
   </>
  )
}
