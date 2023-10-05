import { useContext, useState } from 'react';
import copy from "copy-to-clipboard";
import { applicantContext } from '../../../../../context/applicantDetails/ApplicantContext';
import { mode } from '../../../../../configs/apiConfig';
import { updateApplicantDetailsById } from '../../../../../utils/apis/applicant/Applicant';
import { MyProfileDetailsProps } from '../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps';
import { ShareModal } from '../ShareModal/ShareModal';

const MyLeftProfile = ({ defaultApplicantDetails }: MyProfileDetailsProps) => {

    const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;
    const {applicantDispatch} = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
 
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
        reader.onload = async(readerEvent: ProgressEvent<FileReader>) => {
            const url = readerEvent.target?.result;
            defaultApplicantDetails.photo = url!;
            const response = await updateApplicantDetailsById(applicantloggedinDetails.applicantDetails._id!, defaultApplicantDetails);
            if (response?.status === 200) {
                applicantDispatch({ type: "updateDetails", payload: response?.data.data })
            }
        };
    };


    return (
        <div>
            <div className="md:w-72 m-auto max-w-sm bg-white rounded-xl drop-shadow-xl ">
                <div className="flex justify-end px-2 pt-3">
                    <button className='bg-transparent hover:bg-gray-50 p-3 rounded-lg' onClick={copyToClipboard }>
                        <span>
                          {/* <img className='h-7 w-7' src="https://img.icons8.com/?size=96&id=80981&format=png" alt="" /> */}
                          <ShareModal/>
                        </span>
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10 " >
                <img className="w-32 h-32 mb-3 rounded-full  shadow-xl shadow-orange-200 border-y-4 border-x-4 border-orange-200 "
                            src={defaultApplicantDetails.photo?.toString()} />
                    <label htmlFor="file">
                        
                            <img className='h-10 w-10 -mt-12 ml-20' src="https://img.icons8.com/?size=160&id=102714&format=png" alt="" />
                    </label>
                    <input id="file" type="file"
                        hidden
                        onChange={e => convertImageToUrl(e)}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
                    <span className="text-sm text-gray-500 ">Visual Designer</span>
                    <div className="flex gap-2 mb-3 items-center">
                        <div className="">  <img className='h-5 w-5'
                            src="https://img.icons8.com/?size=2x&id=vmbcIlQ2bP8r&format=png" alt="" />
                        </div>
                        <div className=""> <a className="text-blue-600 font-semibold text-sm mb-4" >{defaultApplicantDetails?.email}</a></div>
                    </div>

                    <div className="flex items-center space-x-6 mt-3 sm:mt-0">
                        <img className='h-7 w-7' src="https://img.icons8.com/?size=96&id=114445&format=png" alt="" />
                       <img  className='h-7 w-7' src="https://img.icons8.com/?size=160&id=LoL4bFzqmAa0&format=png" alt="" />
                       <img className='h-7 w-7' src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png" alt="" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default MyLeftProfile
