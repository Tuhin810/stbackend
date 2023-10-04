import { SignupOtpProps } from "../../../../../../@types/interfaces/props/ApplicantProps/SignupOtpProps"

const OtpVerification = ({ handleChangeOtp }: SignupOtpProps) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="otp" className="text-gray-700 text-sm font-medium mb-1 flex justify-between">Verification Code</label>
                <input type="text" id="otp" name="otp" className={'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChangeOtp(e)} />
            </div>
        </div>
    )
}

export default OtpVerification