import Ratings from "../../Rating_stars/Ratings"

const JobDescription = () => {
  return (
    <div className=' w-full  '>
        <div className="mr-4  drop-shadow-xl border-t py-2 rounded-xl px-7 bg-white">
<div className="heading mt-5">
        <div className="job title text-3xl mb-4 font-bold">
        Area Collection Manager- Soft Bucket
        </div>
<div className="company_name mb-2 text-lg font-semibold text-blue-600 flex gap-2 items-center">
  <img className="h-12 w-12 bg-gray-700 rounded-lg border" src="https://img.naukimg.com/logo_images/groups/v1/3442166.gif" alt="" />
  SkillLabs
        </div>
<div className="stars mb-6">
       Comapny Ratings:<Ratings/>
        </div>
        {/* job detail starts */}
<div className="job deails">
  <div className="heading text-xl mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
</svg>Job description:</div>
  <p>We are looking for a highly proficient English-speaking personal secretary for the executive-level job. Key responsibilities: 1. Flawless Communication: Act as the primary point of contact for internal and external communications, ensuring swift and impeccable responses to emails, phone calls, and messages. 2. Document and Report Management: Prepare, review, and manage official documents, reports, presentations, and correspondence with meticulous attention to detail. 3. Calendar Proficiency: Expertly manage the CEO's schedule, skillfully coordinating meetings, appointments, and international travel arrangements. 4. Meeting Support: Arrange and coordinate board meetings, executive team meetings, and company events, ensuring seamless organization and record minutes accurately. 5. Travel Coordination: Execute travel arrangements, including flights, accommodations, and itineraries, ensuring smooth travel experiences for the CEO. 6. Discretion and Confidentiality: Maintain the highest level of confidentiality and professionalism, handling sensitive information with the utmost discretion. 7. Office Organization: Oversee the CEO's office, ensuring it is well-equipped and efficiently managed, handling any administrative tasks as needed. 8. Relationship Management: Cultivate positive relationships with key stakeholders, clients, and business partners on behalf of the CEO. Requirements: 1. Comfortable with a 24*7 rotational shift and immediate availability to start. 2. Exceptional proficiency in English, with impeccable written and verbal communication skills. 3. Outstanding organizational and time-management skills, with the ability to multitask and prioritize effectively. 4. Proficient in using office software (Microsoft Office Suite, email clients, calendar management tools). 5. Discretion and trustworthiness are paramount, given the access to confidential information. 6. Resourceful problem solver with a proactive attitude and the ability to work independently. 7. Flexibility and adaptability to accommodate changing priorities and fast-paced environments. 8. Professional demeanor, with a positive attitude and a willingness to go the extra mile.</p>
</div>
               {/* job detail ends */}
            <div className="other desc">        
               {/* Education starts */}
           <div className="Education my-6">
                     <div className="heading text-lg mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                    Education</div>
                     <p>UG: Any Graduate
                       <br/>
                   PG: MBA/PGDM in Any Specialization</p>
                   </div>
                  {/* Education ends */}
                       {/* Job Role starts */}
           <div className="Education my-6">
                     <div className="heading text-lg mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                     Job Role</div>
                     <p>Area / Territory Manager</p>
                   </div>
                  {/*  Job Role ends */}
                     {/* Job Role starts */}
           <div className="Education my-6">
                     <div className="heading text-lg mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                   Industry Type</div>
                     <p>Banking</p>
                   </div>
                  {/*  Job Role ends */}
                     {/* Job Role starts */}
           <div className="Education my-6">
                     <div className="heading text-xl mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                      Employment Type</div>
                     <p>Full Time, Permanent</p>
                   </div>
                  {/*  Job Role ends */}
                     {/* Job Role starts */}
           <div className="Education my-6">
                     <div className="heading text-xl mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                     Key Skills</div>
                     <p>Skills highlighted with ‘‘ are preferred keyskills
collections
Collection ManagementDebtDebt RecoveryBad Debt</p>
                   </div>
                  {/*  Job Role ends */}
                   
                  

</div>
        </div>
        </div>
    </div>
  )
}

export default JobDescription