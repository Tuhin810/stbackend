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
                    <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style={{backgroundColor:"#333"}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
</button>


<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style={{backgroundColor:"#1877f2"}}
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
</button>

<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style={{backgroundColor:"#0077b5"}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLeftProfile
