import { IHeroProps } from '../../../../@types/interfaces/props/HeroProps'
import './Hero.css'

const Hero = ({handleLoginButton,handleSignUpButton}:IHeroProps) => {
  return (
    <div>
        <div className='home py-32 mt-10 bg-white'>
                        <div className='left-home'>

                            <h2 className='text-3xl font-extrabold text-gray-900  md:text-3xl lg:text-5xl '>Unlocking Doors to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-cyan-400'>Success Your Future</span> Starts Here.</h2>
                            <p className='text-lg font-normal text-gray-500 lg:text-xl  mt-9'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique sequi iure! Rem, sapiente! Iste, in ab! Obcaecati iure voluptatum ex cum at dignissimos adipisci! Veritatis, sed voluptatibus. Neque, tempora?
                            </p>
                            <div className='mt-10'>
                                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4
                                 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-14 py-2.5 text-center mr-2 mb-2" onClick={handleLoginButton}>
                                    Login
                                </button>
                                <button type="button" className="text-gray-700 border border-gray-700 focus:ring-4 focus:outline-none
                                 focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center mr-2 mb-2 text-center inline-flex items-center" onClick={handleSignUpButton}>
                                    Register
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <div className='right-home'>
                        <img  role="img" aria-label="people smiling" className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"  alt="people smiling"/>
                        </div>
                    </div>
    </div>
  )
}

export default Hero
