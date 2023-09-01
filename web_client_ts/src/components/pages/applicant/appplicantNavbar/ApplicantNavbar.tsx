import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext";
import { ApplicantDetails } from "../../../../@types/ApplicantDetails";
import ApplicantMobileNavbar from "./applicantMobileNavbar/ApplicantMobileNavbar";
import ApplicantDesktopNavbar from "./applicantDesktopNavbar/ApplicantDesktopNavbar";
const ApplicantNavbar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const [profile, setProfile] = useState<boolean>(false);
    const {applicantDispatch} = useContext(applicantContext)

    const logout = () =>{
        applicantDispatch({type:"logout",payload:{}as ApplicantDetails});
        navigate('/home');
    }

    return (
        <>
            <div className="bg-transparent">
                {/* Desktop Navbar starts */}
                <ApplicantDesktopNavbar profile={profile} setProfile={setProfile} logout={logout}/>
                {/* Mobile Navbar */}
                <ApplicantMobileNavbar show={show} setShow={setShow} logout={logout}/>
            </div>
        </>
    );
}

export default ApplicantNavbar;
