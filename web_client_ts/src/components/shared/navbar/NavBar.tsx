
import { useEffect, useState } from 'react'
import { logo } from '../../../assets/images'
import { Link } from 'react-router-dom';
import CommonModal from '../modal/CommonModal';
import { showModal } from '../../../utils/commonFunctions/HandleModal';



const NavBar = () => {
    const modalId= 'navbar-modal'
    const [action, setAction] = useState<string>('login');
    const handleLoginButton = () => {
        setAction('login')
        showModal(modalId);
    }
    const handleSignUpButton = () => {
        setAction('signup')
        showModal(modalId);
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const navbar = document.querySelector(".navbar");
            const items = document.getElementById("items");
            if (window.scrollY > 100) {
                navbar!.classList.add("shadow");
                navbar!.classList.add("bg-[#f5f9ff]/30");
                navbar!.classList.remove("bg-[#f5f9ff]");
                items!.classList.remove("justify-end");
            } else {
                items!.classList.add("justify-end");
                navbar!.classList.add("bg-[#f5f9ff]");
                navbar!.classList.remove("bg-[#f5f9ff]/30");
                navbar!.classList.remove("shadow");
            }
        });
    })

    return (
        <>
            <nav className="navbar bg-[#f5f9ff] backdrop-blur-lg  sticky py-1 sm:py-2 w-full z-20 top-0 left-0 border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap justify-center mx-auto p-4 sm:justify-between" id='items'>
                    <a href="https://flowbite.com/" className="flex items-center " id="logo">
                        <img src={logo} className="h-10 mr-3" alt="Flowbite Logo" />
                    </a>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:darkno:text-black">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/support" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Support</Link>
                            </li>
                            <li>
                                <a href="#" className="inline-flex items-center justify-center  text-base font-medium text-center text-blue-600 " onClick={handleLoginButton}>
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-flex items-center justify-center  text-base font-medium text-center text-red-600 " onClick={handleSignUpButton}>
                                    Register
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <CommonModal leftButtonLink={`/recruiter/${action}`} leftRoute={true} leftButtonText='Employer' rightButtonLink={`/applicant/${action}`} rightRoute={true} rightButtontext='Job Seeker' message={`${action} As a`} id={modalId} Img={''} />
        </>
    )
}
export default NavBar
