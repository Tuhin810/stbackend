import { useContext } from 'react';
import { logo } from '../../../../assets/images';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { Link, useNavigate } from "react-router-dom";
import SideBar from '../sidebar/SideBar';

import "./Nav.css"
const RecruiterNavbar = () => {
  // const [show, setShow] = useState<boolean>(true);
  const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;
  const { company_details } = recruiterDetails;
  const { dispatch } = useContext(recruiterContext);

  const navigate = useNavigate();

  function myFunction() {
    document.getElementById("myDropdown")!.classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!(event.target instanceof Element) || !event.target.classList.contains('dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "logout", payload: {} });
    navigate('/home');
  }
  return (
    <div id='recruiterNavBar'>
      <header className="flex fixed py-4 sm:py-1 top-0 z-50 w-full items-center sm:px-10 bg-white drop-shadow-lg">
        <div className="flex items-center justify-start">
          <Link to="/employer" className="flex ml-2 md:mr-24">
            <img src={logo} className="h-10" alt="Logo" />
          </Link>
        </div>
        <button onClick={() => myFunction()} className="block md:hidden ml-auto pe-6 relative flex-shrink-0 rounded-full" >
          <span className="sr-only">Menu</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="#a6a6a6" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>



        <div className="hidden sm:flex flex-shrink-0 items-center ml-auto">
          <div className="dropdown">
            <button className="dropbtn inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold text-lg">{company_details?.name}</span>
                <span className="text-sm text-gray-600">{company_details?.email}</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 border-2 bg-indigo-50 rounded-lg overflow-hidden">
                {/* <img src="data:image/png;base64,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" alt="user profile photo" className="h-full w-full object-cover" /> */}
                <img src={company_details?.logo} alt="company logo" className='className="h-full w-full object-cover"' />
              </span>
              <svg onClick={() => myFunction()} aria-hidden="true" viewBox="0 0 20 20" fill="#a6a6a6" className="dropbtn hidden sm:block h-6 w-6 text-gray-300">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            {/* <button onClick={()=>myFunction()} className="dropbtn">Dropdown</button> */}
            <div id="myDropdown" className="dropdown-content mt-2 w-60 h-auto">

              <div className="bg-white ">
                <div className="cardo mt-1 rounded-lg  w-100% m-1">
                  <div className="card_load">
                    <img className='rounded-full' src={company_details?.logo} alt="" />
                  </div>

                  <div className="card_load_extreme_descripion ">
                    {company_details?.name}</div>
                  <div className="card_load_extreme_title  flex items-center gap-1 mt-2">

                   
                  </div>
                </div>
                <a href="#about">
                  <h1>About</h1>
                  <p className='text-xs text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat molestiae sapiente quaerat.</p>
                </a>
                <a href="#contact ">
                  <div className="flex justify-between">

                    Contact
                    <div className="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="#a6a6a6"
                        viewBox="0 0 24 24">
                        <path
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>

                      {/* <!-- Messenger --> */}
                      <svg
                        className="h-5 w-5"
                        fill="#a6a6a6"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd">
                        <path
                          d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
                      </svg>

                      {/* <!-- Twitter --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="#a6a6a6"
                        viewBox="0 0 24 24">
                        <path
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>

                    </div>
                  </div>

                </a>
              </div>
            </div>
          </div>
          <div className="border-l pl-3 ml-3 space-x-1">
        {
          (recruiterDetails?.subscription)?<button onClick={()=>navigate('/employer/pricing')} className="md:flex items-center relative p-2 hidden  gap-2  text-gray-400 hover:text-red-400">
              <button className="Btn">
              </button>
            </button>:null
        }
               
           
           
          </div>
        </div>
      </header>
      <SideBar show={true} logout={logout} />

    </div>
  );
}
export default RecruiterNavbar;