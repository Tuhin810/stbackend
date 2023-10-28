import InfoIcon from "../../icons/infoIcon/InfoIcon"

const ChatHead = () => {
    return (
        <div>

            <nav className="border-gray-200 bg-gray-50 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <InfoIcon/>
                    </button>
                    
                </div>
            </nav>

        </div>
    )
}

export default ChatHead