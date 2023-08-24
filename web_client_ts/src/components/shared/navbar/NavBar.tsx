import { useEffect } from 'react'
import { logo } from '../../../assets/images'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate=useNavigate();
    const routeTo =(url:string)=>{
        navigate(url)
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
        <div>
            <div className="navbar fixed top-0 left-0 w-full py-4 bg-transparent z-50 transition-opacity">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                    <img src={logo} className='h-10' />
                    <nav className="space-x-10">
                        <a href="#" className="text-blue-600 hover:text-gray-300">Home</a>
                        <a href="#" className="text-black hover:text-gray-300">About</a>
                        <a href="#" className="text-black hover:text-gray-300">Services</a>
                        <a href="#" className="text-black hover:text-gray-300">Contact</a>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{routeTo('/userType')}}>Sign Up</button>
                        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={()=>{routeTo('/login/Type')}}>Log In</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar
