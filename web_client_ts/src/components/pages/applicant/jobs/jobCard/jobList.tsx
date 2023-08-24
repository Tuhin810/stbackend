import JobCard from './jobcard'

 const JobList =()=>{
	return (
		<>
			<div className="job-list-container mx-none px-4 py-10 flex flex-wrap justify-evenly">
				<JobCard 	
					companyName="ABC Company"
					role="Consultant" 
					location={['kolkata']}
					employmentType="remote"
					experience={3}
					salary={10000}
				/>
				<JobCard 	
					companyName="ABC Company"
					role="Consultant" 
					location={['kolkata']}
					employmentType="remote"
					experience={3}
					salary={10000}
				/>
				<JobCard 	
					companyName="ABC Company"
					role="Consultant" 
					location={['kolkata']}
					employmentType="remote"
					experience={3}
					salary={10000}
				/>
				
															
			</div>
		</>
	)
}

export default JobList