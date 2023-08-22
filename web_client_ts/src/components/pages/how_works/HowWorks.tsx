import React from 'react';
import { get_find, profile_add, sign_up, skill_add, ad_banner, img_replc, starMark } from '../../../assets/images'

import Carousel from '../../shared/carousel/Carousel';

import "./how.css"
/* import Browser from './Browser'
import ServicesList from './Services/Services'
import Accordion from './Accordion/index'
import Footer from './Footer/Footer' */

const HowWorks = () => {

	return (
		<>
			{/* <div className="second sm:flex-none md:flex px-7 sm:flex-col lg:flex-row">
				<div className="features p-10 md:w-5/12 ">
					<p className="head-text flex text-[#18A6D0] text-3xl font-bold">
					<div className='mr-2' >
					<div className="animate-bounce text-white  text-center inline-flex items-center justify-center w-16 h-16  shadow-lg rounded-full bg-blue-400 ">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-patch-question-fill" viewBox="0 0 16 16">
  <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
</svg>
					</div>	
					</div>How It Works?
					</p>
					<p className="ctnt ">
						Searching for a Job or need employee for your company, so you are in the right place, just:
					</p>
					<ul>
						<li className="flex  content-list  ">
							<img src={sign_up} className="bg-blue-400 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Sign Up" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Sign Up</p>
							</div>
						</li>
						<li className="flex content-list  ">
							<img src={profile_add} className="bg-blue-400 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Profile" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Set Profile</p>
							</div>
						</li>
						<li className="flex  content-list ">
							<img src={skill_add} className="bg-blue-400 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Skill and Role" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Add your skills or<br></br> list your requirements for the job role</p>
							</div>
						</li>
						<li className="flex content-list  ">
							<img src={get_find} className="bg-blue-400 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Recruit" />
							<div className="parah text-left text-left space-y-4  flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Get recruited or find employee</p>
							</div>
						</li>
					</ul>
					<button className="create-profile-btn mx-auto my-4 max-w-96  px-14 block text-center text-white rounded-[10px] bg-starmark-blue hover:drop-shadow-xl">Create Profile Now</button>
				</div>
				
			</div>
		
			<div className="ad-space mx-auto my-10 flex justify-center">
				<button className='ad-banner-btn'>
					<img src={ad_banner} className='ad-img px-6' />
				</button>
			</div> */}


<section className=" text-gray-800  ">
<div className="col-span-12 sm:col-span-3 px-24 py-2">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
					<h3 className="text-3xl font-semibold">
							How it works<div className="ml-1 animate-bounce text-white  text-center inline-flex items-center justify-center -mb-3 w-10 h-10   rounded-full  ">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-blue-400" viewBox="0 0 16 16">
  <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
</svg>
					</div></h3>
				<span className="text-sm font-bold tracki uppercase text-gray-600">Searching for a Job or need employee for your company,
				<br/> so you are in the right place, just:
				</span>
				</div>
			</div>
	<div className="container max-w-6xl   mx-auto flex">
	
			<div className="flex"></div>
		<div className="grid gap-1  sm:grid-cols-12">
			
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12  relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
					<li className="flex  content-list  ">
							<img src={sign_up} className="bg-blue-400 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Sign Up" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Sign Up</p>
							</div>
						</li>
						</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
					<li className="flex content-list  ">
							<img src={profile_add} className="bg-pink-500 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Profile" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Set Profile</p>
							</div>
						</li>	</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
					<li className="flex  content-list ">
							<img src={skill_add} className="bg-yellow-500 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Skill and Role" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Add your skills or<br></br> list your requirements for the job role</p>
							</div>
						</li>
					</div>

					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
					<li className="flex content-list  ">
							<img src={get_find} className="bg-green-500 rounded-lg p-1 h-12 w-12 sec-logo my-2 shadow-lg" alt="Recruit" />
							<div className="parah text-left text-left space-y-4  flex items-center">
								<p className="text-lg font-semibold pl-6 align-center ">Get recruited or find employee</p>
							</div>
						</li>
					</div>
				</div>

			</div>
			
		</div>
		
		
		<div className="ml-20 -mt-5">
			
			
			{/* <img src="https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
			 */}
			 <div className=" hidden md:inline ">
  <div className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white  text-gray-800 shadow-md overflow-hidden cursor-pointer right-img" >
    <div className="flex justify-between items-center ml-4 pr-8">
      <div className="bg-blue-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some information</div>
      <div className="bg-blue-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%</div>
    </div>
    <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
      <h3 className="text-xl font-bold pb-2">Get Your Drean Job !</h3>
      <p className="truncate text-gray-500 text-sm">on Starmark</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-xs">...</span>
      </div>
    </div>
  </div>
</div>
			
			</div>
		
	</div>
		
</section>
		</>

	)
}

export default HowWorks;