
import { useEffect, useState } from 'react'
import { logo, modeImg } from '../../../assets/images'
import { Link, useNavigate } from 'react-router-dom';
import CommonModal from '../modal/CommonModal';
import { showModal } from '../../../utils/commonFunctions/HandleModal';



const NavBar = () => {
    const modalId= 'navbar-modal';
    const navigate=useNavigate();
    const [action, setAction] = useState<string>('login');
    const handleLoginButton = () => {
        setAction('login')
        showModal(modalId);
    }
    const handleSignUpButton = () => {
        setAction('signup')
        showModal(modalId);
    }
    const leftMethod = () =>{
        const path=`/recruiter/${action}`;
        navigate(path);
    }
    const rightMethod = () =>{
        const path=`/applicant/${action}`;
        navigate(path);
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
                
            <div aria-hidden="true" className="-z-10 absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-36 bg-gradient-to-br from-purple-800 to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
    </div>
                <div className="max-w-screen-xl flex flex-wrap justify-center mx-auto p-4 sm:justify-between" id='items'>
                    <a href="https://flowbite.com/" className="flex items-center " id="logo">
                        <img src={logo} className="h-12 mr-3" alt="Flowbite Logo" />
                    </a>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 items-center md:p-0 mt-4 font-medium border rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <Link to="/" className=" z-50 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:darkno:text-black">Home</Link>
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
                             
                                <a onClick={handleLoginButton}
                            href="#"
                            className="relative  flex h-10 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-[#f3faff] before:border-2 before:border-blue-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                            <span className="relative text-md font-semibold text-blue-400"
                                >&nbsp;Login&nbsp;</span>
                        </a>
                            </li>
                            <li>
                            <a onClick={handleSignUpButton}
                            href="#"
                            className="relative -ml-2  flex h-10 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-[#144667] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                            <span className="relative text-md font-semibold text-white"
                                >Register</span>
                        </a>
                               
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <CommonModal leftMethod={leftMethod} leftButtonText='Employer' rightMethod={rightMethod} rightButtontext='Job Seeker' message={`${action} As a`} id={modalId} Img={modeImg} />
        </>
    )
}
export default NavBar
