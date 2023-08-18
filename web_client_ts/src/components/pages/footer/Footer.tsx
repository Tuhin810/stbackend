import { Link, useNavigate } from 'react-router-dom'
const Footer = () => {
	const navigate = useNavigate();
	function f() {
		alert("button click");
	}
	return (
		<div>
			<div className="footer-container bg-indigo-50 my-0 pt-12 pt-10 px-8 sm:mx-auto flex flex-col  justify-center">
				<img src={"hh"} className='mx-auto' />
				<div className="footer-content mt-12">
					<ul className="content-list flex flex-wrap justify-center gap-8 md:gap-20 sm:gap-4 mx-auto">
						<li className='text-xl font-medium text-gray-700 font-sans' onClick={f}>Jobs</li>
						<li className='text-xl font-medium text-gray-700 font-sans' onClick={f}>Employer</li>
						<li className='text-xl font-medium text-gray-700 font-sans' onClick={f}>Consultant</li>
						<li className='text-xl font-medium text-gray-700 font-sans' onClick={f}>About Us</li>
						<a href='https://www.facebook.com/groups/smfraudjobdetection/' target='_blank' rel='noreferrer'>
							<li className='text-xl font-medium text-gray-700 font-sans'>Fraud Detection</li>
						</a>
					</ul>
				</div>
				<div className="footer-socials mb-5 flex flex-wrap justify-center gap-2 md:gap-40 sm:gap-4 mx-auto">
					<div className="mt-6 mb-10 flex gap-5">
						<Link to="https://www.youtube.com/c/STARMARKJOBS"> <button className="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
						</button></Link>

						<Link to="https://www.linkedin.com/groups/13971668/"><button className="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
						</button></Link>


						<Link to="https://www.instagram.com/starmark.jobs/"><button className="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">

						</button></Link>


						<Link to="https://www.facebook.com/groups/starmark"><button className="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
						</button></Link>

						<Link to=""> <button className="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">

						</button></Link>
					</div>
				</div>

			</div>
			<div className='end-content text-white mx-auto flex justify-center bg-gray-900 w-full py-4 flex   md:gap-20'>
				<div className='copyright'>Copyright@2023</div>
				<div onClick={f} className='infos'>Terms & Conditions</div>
				<div onClick={f} className='infos'>Privacy</div>
			</div>
		</div>
	)
}

export default Footer