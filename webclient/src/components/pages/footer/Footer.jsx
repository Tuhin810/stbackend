// import {fb,	insta, linkedin, twitter, yt} from '../../images/footer/Footer'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
export default function Footer({ logo }) {

  function f() {
    alert("button click");
  }

  return (
    <>
      <div className="footer-container bg-gray-300 my-0 pt-12 pt-10 px-8 sm:mx-auto flex flex-col  justify-center">
        <img src={logo} className='mx-auto' />
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
          <div class="mt-6 mb-10 flex gap-5">
            <Link to="https://www.youtube.com/c/STARMARKJOBS"> <button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <YouTubeIcon className='text-red-500' /></button></Link>

            <Link to="https://www.linkedin.com/groups/13971668/"><button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <LinkedInIcon className='text-blue-600' /></button></Link>


            <Link to="https://www.instagram.com/starmark.jobs/"><button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <InstagramIcon className='text-pink-600' />
            </button></Link>


            <Link to="https://www.facebook.com/groups/starmark"><button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FacebookIcon className='text-blue-600' /></button></Link>

            <Link to=""> <button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              < TwitterIcon className='text-blue-600' />
            </button></Link>
          </div>
        </div>

      </div>
      <div className='end-content text-white mx-auto flex justify-center bg-gray-900 w-full py-4 flex   md:gap-20'>
        <div className='copyright'>Copyright@2023</div>
        <div onClick={f} className='infos'>Terms & Conditions</div>
        <div onClick={f} className='infos'>Privacy</div>
      </div>
      {/* <footer class="relative bg-blueGray-200 pt-8 pb-6 ">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
		<img className='h-16 w-52 mb-5' src={logo} alt="logo" />
        <h4 class="text-3xl fonat-semibold text-blueGray-700 font-sans font-medium">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600 font-sans">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <YouTubeIcon className='text-red-500'/></button>

			<button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <LinkedInIcon className='text-blue-600'/></button>

			
			<button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <InstagramIcon className='text-pink-600'/>
          </button>

		  
			<button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <FacebookIcon className='text-blue-600'/></button>

		  <button class="transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-50 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            < TwitterIcon className='text-blue-600'/>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4 pt-16">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto ">
            <span class="block uppercase text-blueGray-500 text-sm font-sans mb-2 ">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-sans mb-2">Other Resources</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-sans block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300 "/>
    <div class="flex flex-wrap items-center md:justify-between justify-center ">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-sans py-1">
          Copyright © <span id="get-current-year">2023</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Starmark</a>
         
        </div>
      </div>
    </div>
  </div>
</footer> */}
    </>
  )
}