import { useEffect,useState } from 'react'
import { logo } from '../../../assets/images'
import { Link, useNavigate } from 'react-router-dom';
import CommonModal from '../modal/CommonModal';


const NavBar = () => {
    const navigate = useNavigate();
    const [action,setAction] = useState<string>('login');
    const routeTo = (url: string) => {
        navigate(url)
    }
    const showModal = () => {
        console.log('y');
        document.getElementById('modal-overlay')!.classList.remove('hidden');
    }
    const handleLoginButton = () =>{
        setAction('login')
        showModal();
    }
    const handleSignUpButton = () =>{
        setAction('signup')
        showModal();
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            var navbar = document.querySelector(".navbar");
            if (window.scrollY > 100) {
                navbar!.classList.remove("bg-transparent");
                navbar!.classList.add("bg-white", "shadow");
                console.log(navbar);

            } else {
                navbar!.classList.remove("bg-white", "shadow");
            }
        });
    })

    return (
        <>

            <nav className="navbar bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    </a>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link to="/support" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Support</Link>
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
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <CommonModal leftButtonLink={`/recruiter/${action}`} leftRoute={true} leftButtonText='Recruiter' rightButtonLink={`/applicant/${action}`} rightRoute={true} rightButtontext='Job Seeker' message={`${action} As a`}/>
        </>

    )
}

export default NavBar
