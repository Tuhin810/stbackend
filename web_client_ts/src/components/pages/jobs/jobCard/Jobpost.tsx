import React, { useState, useEffect } from 'react';

const JobPost = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('your-api-endpoint')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
} 
export default JobPost;
