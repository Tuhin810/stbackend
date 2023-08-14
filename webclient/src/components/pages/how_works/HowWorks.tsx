import React from 'react';
import { get_find, profile_add, sign_up, skill_add, ad_banner, img_replc, starMark } from '../../../assets/images'

import Carousel from '../../shared/carousel/Carousel';
/* import Browser from './Browser'
import ServicesList from './Services/Services'
import Accordion from './Accordion/index'
import Footer from './Footer/Footer' */

const HowWorks = () => {

	return (
		<>
			<div className="second sm:flex-none md:flex sm:flex-col lg:flex-row">
				<div className="features p-10 md:w-5/12 ">
					<p className="head-text text-[#18A6D0] text-3xl font-bold">
						How It Works?
					</p>
					<p className="ctnt py-2">
						Searching for a Job or need employee for your company, so you are in the right place, just:
					</p>
					<ul>
						<li className="flex  content-list py-2 ">
							<img src={sign_up} className="sec-logo my-2 shadow-lg" alt="Sign Up" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center py-2">Sign Up</p>
							</div>
						</li>
						<li className="flex content-list py-2 ">
							<img src={profile_add} className="sec-logo my-2 shadow-lg" alt="Profile" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center py-2">Set Profile</p>
							</div>
						</li>
						<li className="flex  content-list py-2">
							<img src={skill_add} className="sec-logo my-2 shadow-lg" alt="Skill and Role" />
							<div className="parah parah text-left text-left space-y-4 flex items-center">
								<p className="text-lg font-semibold pl-6 align-center py-2">Add your skills or<br></br> list your requirements for the job role</p>
							</div>
						</li>
						<li className="flex content-list py-2 ">
							<img src={get_find} className="sec-logo my-2 shadow-lg" alt="Recruit" />
							<div className="parah text-left text-left space-y-4  flex items-center">
								<p className="text-lg font-semibold pl-6 align-center py-2">Get recruited or find employee</p>
							</div>
						</li>
					</ul>
					<button className="create-profile-btn mx-auto my-4 max-w-96 py-2 px-14 block text-center text-white rounded-[10px] bg-starmark-blue hover:drop-shadow-xl">Create Profile Now</button>
				</div>
				{/* CAROUSEL */}
				<Carousel />
			</div>
			{/* <CompanyList /> */}

			{/* <AdSpace image={adBimage}/> */}
			<div className="ad-space mx-auto my-10 flex justify-center">
				<button className='ad-banner-btn'>
					<img src={ad_banner} className='ad-img px-6' />
				</button>
			</div>

		</>

	)
}

export default HowWorks;