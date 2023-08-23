import { useState ,useEffect} from 'react';
const baseUrl ="https://starmark-serverside.onrender.com"

function JobPostForm() {
	// const [auth, setAuth] = useAuth()

  const [company, setcompany] = useState([])

	// const getcompany= async()=>{
	// 	try {
	// 		axios
	// 		.get(`${baseUrl}/get-company/${auth?.user?.email}`)
	// 		.then(({ data }) => {
			
	// 			setcompany(data.company)
	// 			console.log(data.company);
	// 		})

	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// useEffect(() => {
	// 	getcompany()
	//   }, [])




//job details
const [job_role, setjob_role] = useState("")
const [skill, setskill] = useState("")
const [spoken_english, setspoken_english] = useState("")
const [salary, setsalary] = useState("")
const [duty_hours, setduty_hours] = useState("")
const [freshers_allowed, setfreshers_allowed] = useState("")
const [age_limit,setage_limit] = useState("")
const [qualification, setqualification] = useState("")
const [job_expire, setjob_expire] = useState("")
const [employment_type, setemployment_type] = useState("")
const [job_type, setjob_type] = useState("")









// const jobCreate = async(e)=>{
		
//   e.preventDefault();
//   try {
//     const profileData = new FormData();
//     profileData.append("user_phone",auth?.user?.name);
//     profileData.append("email", auth?.user?.email);
//     profileData.append("name", company.name);
//     profileData.append("company_email",company.company_email);
//     profileData.append("year", company.year);
//     profileData.append("Location",company.Location);
//     profileData.append("Gst", company.GST);
//     profileData.append("licence", company.LICENCE);
//     profileData.append("website",company.website);
//     profileData.append("desc", company.desc);
//     profileData.append("company_type", company.company_type);
//     profileData.append("company_logo", company.company_logo);


//     profileData.append("job_role", job_role);
//     profileData.append("job_type", job_type);
//     profileData.append("skill",skill);
//     profileData.append("spoken_english", spoken_english);
//     profileData.append("salary",salary);
//     profileData.append("duty_hours", duty_hours);
//     profileData.append("freshers_allowed", freshers_allowed);
//     profileData.append("age_limit", age_limit);
//     profileData.append("qualification", qualification);
//     profileData.append("job_expire", job_expire);
//     profileData.append("employment_type", employment_type);


    
   
//     const {data} = await axios.post(`${baseUrl}/create-jobpost`,profileData)
//     if (data?.success) {
//       alert("created")
//       navigate("/hire")
//     } else {
//       alert("error")
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

  return (
    <div><div >
    <div className="relative ">
      <div className="relative  ">
        <div className="">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 bg-green-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">i</div>
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Create an Post</h2>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="flex flex-col">
                <label className="leading-loose">Job Title</label>
                <input value={job_role}  onChange={(e) => setjob_role(e.target.value)}    type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Job Role</label>
                <input  value={job_type}  onChange={(e) => setjob_type(e.target.value)} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col">
                  <label className="leading-loose">job_expire</label>
                  <div className="relative focus-within:text-gray-600 text-gray-400">
                    <input value={job_expire}  onChange={(e) => setjob_expire(e.target.value)} type="date" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                    <div className="absolute left-3 top-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Duty Hours</label>
                  <div className="relative focus-within:text-gray-600 text-gray-400">
                    <input value={duty_hours}  onChange={(e) => setduty_hours(e.target.value)} type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020"/>
                  
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Event Description</label>
                <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
              </div>
            </div>
            <div className="pt-4 flex items-center space-x-4 w-full">
                
                {/* <button onClick={jobCreate} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button> */}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default JobPostForm