import { IMatchedApplicantApplicant } from "../../../../@types/interfaces/props/BrodcastJobProps.ts/MatchedApplicantProps"

const MatchedApplicantList = ({ applicantList }: IMatchedApplicantApplicant) => {
    console.log(applicantList);
    return (

        <div >

            <div className="w-full h-full px-4 xl:px-8 py-5">
                <div className="flex items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <div className="w-10 h-10 rounded-full shadow">
                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                    </div>
                    <div className="w-10 h-10 rounded-full shadow">
                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1566753323558-f4e0952af115.jfif" alt="avatar" />
                    </div>
                    <div className="w-10 h-10 rounded-full shadow">
                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1586349425880-ab91652eae47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                    </div>
                    <div className="w-10 h-10 rounded-full shadow">
                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                    </div>
                    <div className="w-10 h-10 rounded-full shadow">
                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                    </div>
                    <div className="w-10 h-10 rounded-full shadow">
                        <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1548958921-c5c0fe1b307d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                    </div>
                    
                </div>
                <hr className="my-5 border border-gray-200" />
                {
                    applicantList.map((applicantDetails, key) => {
                        console.log(applicantDetails);
                        return (
                            <div key={key}>
                                <div className="w-full h-full pb-5 lg:pb-10">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="mr-4 w-12 h-12 rounded-full shadow">
                                                <img className="w-full h-full overflow-hidden object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                                            </div>
                                            <div>
                                                <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">{applicantDetails?.applicant_details.first_name} {applicantDetails.applicant_details.last_name}</h3>
                                                <p className="text-gray-600 text-xs leading-3">{applicantDetails.applicant_details.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start md:items-center">
                                            <div className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                                <span className="text-xs text-red-500 font-normal">Pending</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default MatchedApplicantList