import { useContext } from 'react';
import { MyLeftProfileProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyLeftProfileProps'
import copy from "copy-to-clipboard";
import { applicantContext } from '../../../../../context/applicantDetails/ApplicantContext';
const MyLeftProfile = ({ first_name, middle_name, last_name, email }: MyLeftProfileProps) => {

    const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;

    let name = "";
    if (middle_name !== undefined) {
        name = first_name + " " + middle_name + " " + last_name;
    }
    else {
        name = first_name + " " + last_name;
    }
    const copyToClipboard = () => {
        const path = `http://localhost:5173/resume/${applicantDetails._id}`;
        copy(path);
        alert(`You have copied`)
    }
    return (
        <div>
            <div className="md:w-72 m-auto max-w-sm bg-white  rounded-xl drop-shadow-xl ">
                <div className="flex justify-end px-2 pt-3">
                    <button className='bg-transparent hover:bg-gray-50 p-3 rounded-lg' onClick={copyToClipboard}>
                        <span>
                            <svg className="w-6 h-6 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 15">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="m13.717 1 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-5.73-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646L9.418 1.685a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-32 h-32 mb-3 rounded-full border-4 shadow-lg shadow-gray-300 border-gray-400 "
                        src="https://static.naukimg.com/s/0/0/i/ni-gnb-revamped/userdp.svg" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
                    <span className="text-sm text-gray-500 ">Visual Designer</span>
                    <div className="flex gap-2 mb-3 items-center">
                        <div className="">  <img className='h-5 w-5'
                            src="https://cdn-icons-png.flaticon.com/128/873/873360.png" alt="" />
                        </div>
                        <div className=""> <a className="text-blue-400 font-semibold text-sm mb-4" >{email}</a></div>
                    </div>

                    <div className="flex gap-2">
                        <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                            <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993
                                C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,
                                218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562
                                C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z
                                M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052
                                C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,
                                57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,
                                79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 
                                L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231
                                -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 
                                L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 
                                247.363742,-0.133792868
                                237.033403,0.000790807055"></path></g>
                            </svg>
                        </button>
                        <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                            </svg>
                        </button>
                        <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                            <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLeftProfile
