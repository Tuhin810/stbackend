import { IMobileApplicantNavbarProps } from "../../../../../@types/interfaces/props/ApplicantProps/ApplicantNavbarProps"
import { logo } from "../../../../../assets/images"

const ApplicantMobileNavbar = ({ show, setShow }: IMobileApplicantNavbarProps) => {
    return (
        <div>
            <nav>
                <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-100 fixed top-0 z-40 shadow-lg">
                    <div className="w-24">
                        <img src={logo} />
                    </div>
                    <div>
                        <div id="menu" className="text-black" onClick={() => setShow(!show)}>
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
                    <div className="bg-transparent w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 shadow shadow-xl h-full bg-slate-50 flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <img src={logo} className="h-8" />
                                            </div>
                                            <div id="cross" className="text-black" onClick={() => setShow(!show)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="font-extralight">
                                        <a className="cursor-pointer">
                                            <li className=" pt-10">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                                            <li className=" pt-10">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <circle cx={12} cy={7} r={4} />
                                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                            </svg>
                                                    </div>
                                                    <p className="text-black xl:text-base text-base ml-3">My Profile</p>
                                                </div>
                                            </li>
                                        </a>
                                        <a className="cursor-pointer">
                                            <li className="text-black pt-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                                    <circle cx={12} cy={12} r={9} />
                                                                </svg>
                                                        </div>
                                                        <p className="text-black xl:text-base  text-base ml-3">Perfomance</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                        <a className="cursor-pointer">
                                            <li className="text-black pt-8">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2 icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <circle cx={12} cy={12} r={9} />
                                                            <line x1={12} y1={17} x2={12} y2="17.01" />
                                                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-black xl:text-base  text-base ml-3">Fraud</p>
                                                </div>
                                            </li>
                                        </a>
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