import { SignupOtpProps } from "../../../../../../@types/interfaces/props/ApplicantProps/SignupOtpProps"

const SignUpPage4 = ({ handleChangeOtp }: SignupOtpProps) => {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-90">Enter Your Otp</label>
                <input type="text" id="otp" name="otp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeOtp(e)} />
            </div>
        </>
    )
}

export default SignUpPage4