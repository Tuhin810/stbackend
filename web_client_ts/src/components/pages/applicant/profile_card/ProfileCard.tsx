import { forwardRef, useContext } from "react"
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext"
import QRCode from "react-qr-code";
import { logo } from "../../../../assets/images";
import { MyProfileDetailsProps } from "../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps";

const ProfileCard = forwardRef(({componentRef}:MyProfileDetailsProps) => {
  const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;
  return (
    <div className="min-h-screen flex justify-center items-center" ref={componentRef}>
      <div className="max-w-sm h-fit p-4 bg-white border border-gray-200 rounded-lg shadow ">
        <div className="flex items-center space-x-14">
          <QRCode value={`https://starmarks.in/resume/${applicantDetails._id}`} size={150} fgColor="#08014a" />
          <div className="">
            <h2 className="font-semibold text-xl text-indigo-700 font-serif">{applicantDetails.first_name} {applicantDetails.middle_name ? applicantDetails.middle_name + " " : ''}{applicantDetails.last_name}</h2>
            <div className="">
              <p>{applicantDetails.email}</p>
              <p>{applicantDetails.country_code}{applicantDetails.phone}</p>
              {
                applicantDetails.birth_year?
                <p>Age : {new Date().getFullYear() - applicantDetails.birth_year} years</p>:null
              }
            </div>
          </div>
        </div>
        <div className='copy_right flex items-center justify-center ms-auto w-100 relative bottom-0'>
          <p className="text-md">Powered By </p>
          <img src={logo} className='h-8' />
        </div>
      </div>

    </div>
  )
})

export default ProfileCard