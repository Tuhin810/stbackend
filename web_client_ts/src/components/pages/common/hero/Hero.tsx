import { IHeroProps } from '../../../../@types/interfaces/props/HeroProps'
import { VerticacarouselAnimation } from '../../../shared/VerticacarouselAnimation/VerticacarouselAnimation'
import './Hero.css'


const Hero = ({ handleLoginButton, handleSignUpButton }: IHeroProps) => {
    return (
        <div>
            
            <div className='home bg-[#f5f9ff] mb-10 px-5 pt-2 pb-14 sm:py-12 sm:pb-32  flex flex-col md:flex-row'>
                
                <div className='left-home' data-aos="fade-right">
                    <h2 className='text-4xl font-extrabold text-black  md:text-3xl lg:text-5xl '>Unlocking Doors to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-700 '>Success Your Future</span> Starts Here.</h2>
                    <p className='text-xs  md:text-sm font-normal text-gray-500 lg:text-xl  mt-9'>
                        Embark on your journey to excellence with career opportunities matching to your requirements. Job search now ends here! Starmarks brings to the job seekers the best of job opportunities to match their profiles and help them climb towards the ladder of success. Come join us today for free!
                    </p>
                    <div className='right-home sm:hidden  w-80 '>
                        <div className='w-full '>
                            <VerticacarouselAnimation />
                        </div>
                    </div>
                    <div className='mt-10 flex flex-row md:justify-start justify-center gap-5'>

                        <button onClick={handleLoginButton}
                            className="mt-6 px-10 py-4 rounded-xl font-normal tracking-wide bg-gradient-to-b from-blue-500 to-blue-600 text-white outline-none focus:outline-none hover:shadow-lg hover:shadow-blue-900 hover:from-blue-600 hover:to-blue-700 transition duration-200 ease-in-out
                         ">
                            &nbsp;&nbsp; Login&nbsp;&nbsp;
                        </button> 


                        <button onClick={handleSignUpButton}
                            className="mt-6 px-10 py-4 flex gap-2 items-center rounded-xl font-normal tracking-wide hover:shadow-gray-700   text-gray-800 border border-gray-700 hover:border-gray-400 outline-none focus:outline-none hover:shadow-lg  transition duration-200 ease-in-out
                         ">
                             Register 
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>

                        {/* <button type="button" className=" text-gray-700 border border-gray-700 focus:ring-4 focus:outline-none
                                 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3  mr-2 mb-2 text-center inline-flex items-center" onClick={handleSignUpButton}>
                            Register
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button> */}
                    </div>

                </div>
                <div className='right-home hidden sm:block w-96 '>
                    <div className='w-full '>
                        <VerticacarouselAnimation />
                        {/* <img  role="img" aria-label="people smiling" className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"  alt="people smiling"/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

