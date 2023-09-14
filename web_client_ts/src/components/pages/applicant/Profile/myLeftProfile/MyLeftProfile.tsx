import { useContext ,useState} from 'react';
import copy from "copy-to-clipboard";
import { applicantContext } from '../../../../../context/applicantDetails/ApplicantContext';
import { mode } from '../../../../../configs/apiConfig';
import { updateApplicantDetailsById } from '../../../../../utils/apis/applicant/Applicant';
import { MyProfileDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps';
const MyLeftProfile = ({defaultApplicantDetails }: MyProfileDetailsProps) => {

    const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;
    const { applicantDispatch } = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
const [selectedFile, setSelectedFile] = useState<string|ArrayBuffer>()
    let name = "";
    if (defaultApplicantDetails.middle_name !== undefined) {
        name = defaultApplicantDetails.first_name + " " + defaultApplicantDetails.middle_name + " " + defaultApplicantDetails.last_name;
    }
    else {
        name = defaultApplicantDetails.first_name + " " + defaultApplicantDetails.last_name;
    }
    const copyToClipboard = () => {
        const baseUrl = (mode === "local") ? "http://localhost:5173/resume/" : "http://starmarks.in.s3-website.ap-south-1.amazonaws.com/"
        const path = baseUrl + applicantDetails._id;
        copy(path);
        alert(`You have copied`)
    }

    
    const convertImageToUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files![0]) {
          reader.readAsDataURL(e.target.files![0]);
        }
      
        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
          const url = readerEvent.target?.result;
          setSelectedFile(url!);
         defaultApplicantDetails.photo=url!;
          updateApplicantDetailsById(applicantloggedinDetails.applicantDetails._id!,defaultApplicantDetails)
        };
      };
   



    
    return (
        <div>
            <div className="md:w-72 m-auto max-w-sm bg-white rounded-xl drop-shadow-xl ">
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
                <label htmlFor="file">
                <img className="w-32 h-32 mb-3 rounded-full border-4 shadow-xl shadow-orange-200 border-orange-300 "
                        src={defaultApplicantDetails.photo?.toString()} />

                                  
                      </label>

                         <input id="file" type="file"
                          hidden
                             onChange={convertImageToUrl}
                         />
                     <h5 className="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
                    <span className="text-sm text-gray-500 ">Visual Designer</span>
                    <div className="flex gap-2 mb-3 items-center">
                        <div className="">  <img className='h-5 w-5'
                            src="https://cdn-icons-png.flaticon.com/128/873/873360.png" alt="" />
                        </div>
                        <div className=""> <a className="text-blue-600 font-semibold text-sm mb-4" >{defaultApplicantDetails?.email}</a></div>
                    </div>

                    <div className="sm:flex flex-row items-center space-x-6">
                        <svg className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 9H2V21H6V9Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLeftProfile
