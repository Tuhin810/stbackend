
import "./s.css"

export default function ServicesList({}){
	
	return(
		<>
			<div   className=" mt-10 services-container md:w-full sm:flex-none md:flex sm:flex-col lg:flex-row">
				<div className="services-list md:w-10/12 mx-9 md:ml-10 sm:mx-2">



                <div className="col-span-12 sm:col-span-3 ml-12">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
					<h3 className="text-3xl font-semibold">
                    Ultimate Services for your Company<div className="ml-2 text-blue-500 ml-1 animate-bounce   text-center inline-flex items-center justify-center -mb-3 w-10 h-10   rounded-full  ">
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="" viewBox="0 0 16 16">
  <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/>
  <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/>
</svg>
					</div></h3>
				<span className="text-sm font-bold tracki uppercase text-gray-600">We provide complete workroom services for reupholstery, 
				<br/> refinishing,bedding and more.
				</span>
				</div>
			</div>
					{/* <div className='head-text text-bold head-text text-4xl font-bold mx-auto
					 flex justify-center mt-5 mb-10 ClassProperties font-sans gap-3' >
					Ultimate Services for your Company.
					</div> */}

					

					<div className="offered-services flex flex-wrap md:pl-16  md:mx-auto">

						
                        
                        <div className="md:flex gap-5">
                            {/*  option */}	
                          
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 w-8" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Shortlist Resume</p>
               
                <div className="border-t-2"></div>

                <div className="flex justify-between">
                    
                     <div className="my-2">
					 Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.
                    </div>
                </div>
            </div>
        </div>

						
						{/*  option */}
						<div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                 
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="h-8 w-8" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>     </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Call For Interview</p>
               
                
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
				<div className="my-2">
					 Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.
                    </div>
                </div>
            </div>
        </div>
						
						</div>
						
                        <div className="md:flex gap-5">
							
							{/*  option */}
							<div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Avail alternate candidate</p>
                
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
				<div className="my-2">
					 Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.
                    </div>
                </div>
            </div>
        </div>

        {/* option */}
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                 
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="h-8 w-8" viewBox="0 0 16 16">
            <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>

                </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Takes very less time</p>
               
               
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
				<div className="my-2">
					 Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.
                    </div>
                </div>
            </div>
        </div>
						</div>
						
					</div>
				</div>
				<div  className="img-container mt-36 sm:w-full md:w-8/12 mx-auto flex md:ml-10 p-5 md:p-0 sm:mx-auto justify-start">
					{/* <div className="services-img mx-2 h-[530px] w-96"></div> */}
					<div   className="wrapper  antialiased text-gray-900">
<div>
    
    <img src="https://images.pexels.com/photos/3277806/pexels-photo-3277806.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" random imgee"   className="h-[350px] w-96 object-cover object-center rounded-lg shadow-md"/>    
    
 <div   className="relative px-4 -mt-16  ">
   <div   className="bg-white p-6 rounded-lg shadow-lg">
    <div   className="flex items-baseline">
      <span   className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div   className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4   className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
 
  <div   className="mt-1">
    $1800
    <span   className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div   className="mt-4">
    <span   className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span   className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>
				</div>
			</div>
		</>
	)
}