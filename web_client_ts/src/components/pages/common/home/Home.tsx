
import './home.css';
import Footer from '../footer/Footer';
import HowWorks from '../how_works/HowWorks';
import ServicesList from '../serviceList/ServiceList';
import "./home.css"
import { home } from '../../../../assets/images';
import FrequentlyAskedQuestion from '../frequentlyAskedQuestion/FrequentlyAskedQuestion';
import Testimonial from '../Testimonial/Testimonial';
import Advertisement from '../../../shared/card/Advertisement';
import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import CommonModal from '../../../shared/modal/CommonModal';
import { useState } from 'react';
import Features from '../features/Features';
import CompanyList from '../companyList/CompanyList';
const Home = () => {
    const modalId='home-modal'
    const [action,setAction] =useState<string>('');
    const handleLoginButton = () => {
        setAction('login')
        showModal(modalId);
    }
    const handleSignUpButton = () => {
        setAction('signup')
        showModal(modalId);
    }
    return (
        <>
            <div className="fixed layout top-0 z-10 bg-gray-50 w-full">
                {/* <ComplexNavbar/> */}
            </div>
            <div className="mt-24 ">
                <div className="home-page  py-10 ">

                    <div className='home mb-24'>
                        <div className='left-home'>

                            <h2 className='text-3xl font-extrabold text-gray-900  md:text-3xl lg:text-5xl '>Unlocking Doors to <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400'>Success Your Future</span> Starts Here.</h2>
                            <p className='text-lg font-normal text-gray-500 lg:text-xl  mt-9'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique sequi iure! Rem, sapiente! Iste, in ab! Obcaecati iure voluptatum ex cum at dignissimos adipisci! Veritatis, sed voluptatibus. Neque, tempora?
                            </p>
                            <div className='mt-10'>
                                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-14 py-2.5 text-center mr-2 mb-2" onClick={handleLoginButton}>
                                    Login
                                </button>
                                <button type="button" className="text-gray-700 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 text-center inline-flex items-center" onClick={handleSignUpButton}>
                                    Register
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <div className='right-home'>
                            <img src={home} />
                        </div>
                    </div>
                    <CommonModal leftButtonLink={`/recruiter/${action}`} leftRoute={true} leftButtonText='Employer' rightButtonLink={`/applicant/${action}`} rightRoute={true} rightButtontext='Job Seeker' message={`${action} As a`} id={modalId} />
                    {/* home components */}
                    <Features/>
                    <HowWorks />
                    <CompanyList />
                    <ServicesList />
                    <Advertisement />
                    <Testimonial />
                    <FrequentlyAskedQuestion />

                    <div className="my-5"></div>

                </div></div>
            <Footer /> </>
    )
}

export default Home;
