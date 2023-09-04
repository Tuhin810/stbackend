import { Link } from 'react-router-dom'
import { logo } from '../../../../../assets/images'
import { IDesktopApplicantNavbarProps } from '../../../../../@types/interfaces/props/ApplicantProps/ApplicantNavbarProps'

const ApplicantDesktopNavbar = ({profile,setProfile,logout}:IDesktopApplicantNavbarProps) => {
  return (
    <div>
        <nav className="w-full px-10 fixed z-30 top-0 bg-white hidden xl:block drop-shadow-lg">
                    <div className="container px-6 h-20 flex justify-between items-center lg:items-stretch mx-auto">
                        <div className="flex items-center justify-around w-4/5">
                            <div className="mr-10 flex items-center">
                                <img src={logo} className="h-10" />
                            </div>
                            <ul className="hidden xl:flex items-center h-full">
                                <Link to="/applicant/invitedjobs">
                                    <li className="cursor-pointer h-full flex items-center text-md font-medium hover:text-indigo-700 text-black mx-10 tracking-normal transition duration-150 ease-in-out">
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                            </svg>
                                        </span>
                                        Job Dashboard
                                    </li>
                                </Link>
                                <Link to="/applicant/profile">
                                <li className="cursor-pointer h-full flex items-center text-md font-medium hover:text-indigo-700 text-black mr-10 tracking-normal transition duration-150 ease-in-out">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={7} r={4} />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                    </span>
                                    My Profile
                                </li>
                                </Link>
                                <li className="cursor-pointer h-full flex items-center text-md font-medium hover:text-indigo-700 text-black mr-10 tracking-normal transition duration-150 ease-in-out">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                            <circle cx={12} cy={12} r={9} />
                                        </svg>
                                    </span>
                                    Performance
                                </li>
                                <li className="cursor-pointer h-full flex items-center text-md font-medium hover:text-indigo-700 text-black tracking-normal transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2 icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={9} />
                                        <line x1={12} y1={17} x2={12} y2="17.01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                    Fraud
                                </li>
                            </ul>
                        </div>
                        <div className="h-full hidden xl:flex items-center justify-end">
                            <div className="h-full flex">
                                <div className="flex items-center pl-8 relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                    {profile && (
                                        <ul className="p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 ">
                                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={12} cy={7} r={4} />
                                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                    </svg>
                                                    <span className="ml-2">My Profile</span>
                                                </div>
                                            </li>
                                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={12} cy={12} r={9} />
                                                    <line x1={12} y1={17} x2={12} y2="17.01" />
                                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                                </svg>
                                                <span className="ml-2">Help Center</span>
                                            </li>
                                            <li className="cursor-pointer rounded-md px-1  hover:bg-red-100 text-red-400 font-semibold text-sm leading-3 tracking-normal mt-2 py-2 hover:text-red-500 flex items-center " onClick={logout}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                                <span className="ml-2">Log Out</span>
                                            </li>
                                        </ul>
                                    )}
                                    <div className="px-2  border h-10 rounded-full flex items-center gap-2 hover:bg-gray-50">
                                        <img className="rounded-full h-8 w-8 object-cover  "
                                     src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="logo" />
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
                                     </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center xl:hidden">
                            <ul className="p-2 border-r absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                                <li className="flex md:hidden cursor-pointer text-black text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                        </svg>
                                        <span className="ml-2 font-bold text-black">Dashboard</span>
                                    </div>
                                </li>
                                <li className="flex md:hidden flex-col cursor-pointer text-black text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                        </svg>
                                        <span className="ml-2 font-bold">Products</span>
                                    </div>
                                </li>
                                <li className="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                        <circle cx={12} cy={12} r={9} />
                                    </svg>
                                    <span className="ml-2 font-bold">Performance</span>
                                </li>
                                <li className="border-b border-gray-300 flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="7 8 3 12 7 16" />
                                            <polyline points="17 8 21 12 17 16" />
                                            <line x1={14} y1={4} x2={10} y2={20} />
                                        </svg>
                                        <span className="ml-2 font-bold">Deliverables</span>
                                    </div>
                                </li>
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                            <img className="rounded h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png" alt="logo" />
                                        </div>
                                        <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                                        <div className="sm:ml-2 text-white relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={7} r={4} />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        <span className="ml-2">Profile</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </div>
  )
}

export default ApplicantDesktopNavbar