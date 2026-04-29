import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import jobsData from '../assets/jobs.json';
import "./Jobs.css";
import Card from './Card';

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
      <div className='jobs-container'>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Card key={index} job={job} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  )
}

export default Jobs
