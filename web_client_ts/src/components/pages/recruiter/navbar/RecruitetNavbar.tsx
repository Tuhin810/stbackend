import React from 'react'

const RecruitetNavbar = () => {
    return (
        <div>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="text-white text-xl font-semibold">My Website</a>
                    </div>
                    <div className="hidden md:block">
                        <ul className="space-x-4">
                            <li><a href="#" className="text-white hover:underline">Home</a></li>
                            <li><a href="#" className="text-white hover:underline">About</a></li>
                            <li><a href="#" className="text-white hover:underline">Services</a></li>
                            <li><a href="#" className="text-white hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="md:hidden bg-blue-500 py-2">
                <ul className="flex flex-col space-y-2 px-4">
                    <li><a href="#" className="text-white hover:underline">Home</a></li>
                    <li><a href="#" className="text-white hover:underline">About</a></li>
                    <li><a href="#" className="text-white hover:underline">Services</a></li>
                    <li><a href="#" className="text-white hover:underline">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default RecruitetNavbar
