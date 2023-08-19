import JobCard from './jobcard'

export default function JobList(){
	return (
		<>
			<div className="job-list-container mx-none px-4 py-10 flex flex-wrap justify-evenly">
				<JobCard 
					
					companyName="ABC Company"
					role="Consultant" 
					functionalArea="Other" 
					stateCity="Chennai" 
					employmentType="remote"
					experience="0-3"
					urgency="Immediate"
					
				/>
				<JobCard
					companyName="XYZ Company"
					role="Software Engineer" 
					functionalArea="Other" 
					stateCity="Kolkata" 
					employmentType="Hybrid"
					experience="0-3"
					urgency="Immediate"
				/>
				<JobCard
					companyName="XYZ Company"
					role="Software Engineer" 
					functionalArea="Other" 
					stateCity="Kolkata" 
					employmentType="Hybrid"
					experience="0-3"
					urgency="Immediate"
				/>
				<JobCard
					companyName="XYZ Company"
					role="Software Engineer" 
					functionalArea="Other" 
					stateCity="Kolkata" 
					employmentType="Hybrid"
					experience="0-3"
					urgency="Immediate"
				/>											
			</div>
		</>
	)
}