import { useContext } from 'react'
import { applicantGoogleLogIn, applicantSignUp } from '../../../../../utils/apis/auth/login';
import { ApplicantDetails } from '../../../../../@types/ApplicantDetails';
import { applicantContext } from '../../../../../context/applicantDetails/ApplicantContext';
import { globalContext } from '../../../../../context/GlobalDetails/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { getFormattedtName } from '../../../../../utils/commonFunctions/FormatName';
import { signInWithGoogle } from '../../../../../configs/firebaseConfig';
import { UserCredential } from 'firebase/auth';
import { google_icon } from '../../../../../assets/images';
import { GoogleSignInProps } from '../../../../../@types/interfaces/props/googleSignInProps/GoogleSignInProps';

const ApplicantGoogleSignUp = ({setLoading,applicantDetails,setHasError,setErrorMessage}:GoogleSignInProps) => {
    const {applicantDispatch} =useContext(applicantContext);
    const {loggedIn} =useContext(globalContext);
    const navigate = useNavigate();

    const generatePassword = (length: number) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
      }

    const googeleSignUp = async () => {
        setLoading(true);
        await applicantSignUp(applicantDetails).then(response => {
            setLoading(false);
            if (response?.status === 200) {
                const responseApplicant: ApplicantDetails = response?.data.user;
                applicantDispatch({ type: "signup", payload: responseApplicant })
                loggedIn({ type: "login", userType: "applicant" });
                navigate("/applicant");
            }
        }).catch(async (error) => {
            setLoading(false);
            if (error.response.status === 409) {

                await applicantGoogleLogIn(applicantDetails.email).then(response => {
                    setLoading(false);
                    if (response?.status === 200) {
                        const responseApplicant: ApplicantDetails = response?.data.data;
                        applicantDispatch({ type: "login", payload: responseApplicant })
                        loggedIn({ type: "login", userType: "applicant" });
                        navigate("/applicant");
                    }
                }).catch(error => {
                    setLoading(false);
                    setHasError(true);
                    console.log(error);
                })

            }
            setErrorMessage(error.response.data.message);
        })
    }

    const googleSignIn = async () => {
        const response: UserCredential = await signInWithGoogle();
        if (response) {
          const { user } = response;
          const name = getFormattedtName(user.displayName)
          applicantDetails.email = user.email!;
          applicantDetails.is_email_verified = user.emailVerified;
          applicantDetails.photo = user.photoURL || '';
          applicantDetails.first_name = name[0];
          applicantDetails.last_name = name[name.length - 1];
          applicantDetails.password = generatePassword(8);
          await googeleSignUp();
        }
    }

    
    return (

        <button type="button" onClick={googleSignIn} className="text-gray-900 w-full bg-white hover:bg-gray-100 border
        border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium
         rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 my-3">
         <img src={google_icon} className="me-2" />
         Sign In With Google
       </button>

    )
}

export default ApplicantGoogleSignUp