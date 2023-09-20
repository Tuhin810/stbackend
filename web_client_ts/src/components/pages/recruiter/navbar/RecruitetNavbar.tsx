import { useContext, useEffect } from 'react';
import { logo } from '../../../../assets/images';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { useNavigate } from "react-router-dom";
const RecruiterNavbar = () => {

  const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;
  const { company_details } = recruiterDetails;
  const { dispatch } = useContext(recruiterContext);
  useEffect(() => {
    console.log(company_details);
  }, [])
  const navigate = useNavigate();


  const logout = () => {
    console.log('log out');
    localStorage.clear();
    dispatch({ type: "logout", payload: {} });
    navigate('/home');
  }
  return (
    <div id='recruiterNavBar'>
      {/* <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                                <img src={logo} className="h-12 mr-3" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                    <h2 className='text-xl bg-blue-700 text-white px-4 py-2 rounded-xl inline-flex items-center'>
                                        <svg className="w-5 h-5 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z" />
                                        </svg>
                                        {company_details.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
      <header className="flex fixed top-0 z-50 w-full items-center h-20 px-6 sm:px-10 bg-white drop-shadow-lg">
        <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
          <span className="sr-only">Menu</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div className="flex items-center justify-start">

          <a href="/" className="flex ml-2 md:mr-24">
            <img src={logo} className="h-12 mr-3" alt="FlowBite Logo" />
          </a>
        </div>

        <div className="flex flex-shrink-0 items-center ml-auto">
          <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span className="sr-only">User Menu</span>
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span className="font-semibold text-lg">{company_details.name}</span>
              <span className="text-sm text-gray-600">{company_details.email}</span>
            </div>
            <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 border-2 bg-gray-100 rounded-lg overflow-hidden">
              <img src="data:image/png;base64,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" alt="user profile photo" className="h-full w-full object-cover" />
            </span>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div className="border-l pl-3 ml-3 space-x-1">
            <button className="relative p-2 text-gray-400 hidden md:inline hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button onClick={logout} className="relative p-2 hidden  gap-2 md:inline text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              

              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
export default RecruiterNavbar;