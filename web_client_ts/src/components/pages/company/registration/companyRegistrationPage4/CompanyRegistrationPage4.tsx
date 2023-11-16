
import { CompanyRegistrationProps } from '../../../../../@types/interfaces/props/companyProps/CompanyRegistrationProps'
import './CompanyRegistrationPage4.css'
import { imageUpload } from '../../../../../assets/images'

const CompanyRegistrationPage4 = ({ companyDetails,setCompanyDetails }: CompanyRegistrationProps) => {
    const convertImageToUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        if (e.target.files![0]) {
            reader.readAsDataURL(e.target.files![0]);
        } else {
            console.log("No file selected");
        }

        reader.onload = async (readerEvent: ProgressEvent<FileReader>) => {
            const url = readerEvent.target?.result;
            console.log("URL read:", url);

            setCompanyDetails((prevCompanyDetails) => {
                return { ...prevCompanyDetails, logo: url?.toString() };
            });

            // Now you can access the updated companyDetails.logo
            console.log("companyDetails.logo:", companyDetails.logo);
        };
    };
    return (
        <div>
            <div className="mx-auto w-64 flex flex-col space-y-5 items-center justify-center my-3">
                {
                    companyDetails.logo === "" ?
                        <img className='circle-image' src={imageUpload} alt='logo' /> :
                        <img className='circle-image' src={companyDetails.logo} alt='logo' />
                }
                {/* <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple</button> */}
                <label htmlFor="file">
                    <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-32 h-9 rounded-md flex justify-center items-center drop-shadow-lg shadow-blue-400 text-gray-100 ">
                        {
                            (!companyDetails.logo) ? "Upload logo" : "Change logo"
                        } </div>
                </label>
                <input id="file" type="file" name="logo"
                    hidden
                    onChange={e => convertImageToUrl(e)}
                />
            </div>
        </div>
    )
}

export default CompanyRegistrationPage4