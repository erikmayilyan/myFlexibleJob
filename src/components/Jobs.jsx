import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import jobsData from '../assets/jobs.json';

const Jobs = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search') || '';

  const filteredJobs = query ? jobsData.jobs.filter(job =>
    job.position_name.toLowerCase().includes(query.toLowerCase()) || 
    job.company_name.toLowerCase().includes(query.toLowerCase())
  ) : jobsData.jobs;

  return (
    <div>
      <h2>{query ? `Results for "${query}"` : `All Jobs`}</h2>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
          <div key={index}>
            <h3>{job.position_name}</h3>
            <p>{job.company_name}</p>
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  )
}

export default Jobs
