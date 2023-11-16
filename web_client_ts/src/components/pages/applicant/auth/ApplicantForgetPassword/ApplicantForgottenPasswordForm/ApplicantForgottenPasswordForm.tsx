import { useState } from "react";
import { applicantForgetPassword } from "../../../../../../utils/apis/auth/forgetPass";
import { decryptData } from "../../../../../../utils/commonFunctions/Decrypt";
import { logo } from "../../../../../../assets/images";
import ProgressStep from "../../../../../shared/ProgressStep/ProgressStep";


const ForgotPasswordForm = () => {
    const [phone, setPhone] = useState<string>("");
    const [hasSendOtp, setHasSendOtp] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [otp, setOtp] = useState<string>("");
    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPhone(value);
    }
    const handleForgetPass = async () => {
        const response = await applicantForgetPassword(phone);
        if (response?.status === 200) {
            setHasSendOtp(true);
            const decryptOtp = decryptData(response.data.data)
            setOtp(decryptOtp);
        }
        console.log("otp",otp);
    }

    // const handleCheckOtp = async()=>{

    // }
    return (
        <div className="applicant_signup" id="applicant_signup">
            <div className="flex flex-col items-center justify-center gap-y-6 h-screen w-full px-5">
                <img src={logo} />
                <ProgressStep currentStep={1} stepcount={3} />
                <div className=" w-full max-w-sm">
                    <h1 className="text-2xl font-semibold mb-8">Forget <span className="text-indigo-700">Password</span></h1>
                    <div id='forgetpass'>
                        <div className="mb-4">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-90">Phone Number</label>
                            <input type="text" id="first_name" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled={hasSendOtp} onChange={(e) => handleChangePhone(e)} />
                        </div>
                        {
                            hasSendOtp ?
                                <div className="mb-4">
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-90">Otp</label>
                                    <input type="text" id="first_name" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangePhone(e)} />
                                </div> : null
                        }
                    </div>
                    <div className="flex w-full">
                        <button type="button" className="text-white w-full bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 
                            py-2.5 text-center mr-2 mb-2" onClick={handleForgetPass}>Find Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordForm