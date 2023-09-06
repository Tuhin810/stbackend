import { IMobileApplicantNavbarProps } from "../../../../../@types/interfaces/props/ApplicantProps/ApplicantNavbarProps"
import { logo } from "../../../../../assets/images"

const ApplicantMobileNavbar = ({show,setShow}:IMobileApplicantNavbarProps) => {
    return (
        <div>
            <nav>
                <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-100 fixed top-0 z-40 shadow-lg">
                    <div className="w-24">
                        <img src={logo}/>
                    </div>
                    <div>
                        <div id="menu" className="text-white" onClick={() => setShow(!show)}>
                            {show ? (
                                " "
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
                {/*Mobile responsive sidebar*/}
                <div className={show ? "fixed w-full h-full transform -translate-x-0 z-40" : "fixed w-full h-full transform -translate-x-full z-40"} id="mobile-nav">
                    <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0  bg-gray-400 bg-opacity-50 backdrop-blur-sm shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <img src={logo} className="h-8"/>
                                            </div>
                                            <div id="cross" className="text-white" onClick={() => setShow(!show)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="f-m-m">
                                        <a className="cursor-pointer">
                                            <li className=" pt-10">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </div>
                                                    <p className="text-indigo-700 xl:text-base text-base ml-3">Dashboard</p>
                                                </div>
                                            </li>
                                        </a>
                                        <a className="cursor-pointer">
                                            <li className="text-white pt-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-white xl:text-base  text-base ml-3">Products</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                        <a className="cursor-pointer">
                                            <li className="text-white pt-8">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </div>
                                                    <p className="text-white xl:text-base  text-base ml-3">cPerformance</p>
                                                </div>
                                            </li>
                                        </a>
                                        <li className="text-white pt-8 cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </div>
                                                    <p className="text-white xl:text-base  text-base ml-3">Deliverables</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ApplicantMobileNavbar