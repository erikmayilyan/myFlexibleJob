import React from 'react';
import jobs from "../assets/jobs.json";
import "./StudentApplications.css";

const StudentApplications = () => {
  const appliedJobs = jobs.jobs.slice(0, 3);

  return (
    <div className='student-applications'>
      
      {appliedJobs.map((job) => {
        return (
          <div className="application-card" key={job.id}>
            <img src={job.image} alt={job.company_name} />
            <h3>{job.position_name}</h3>
            <p>{job.company_name}</p>
            <p>
              Applied On: 07-07-2027
            </p>
          </div>
        );
      })}

    </div>
  );
}

export default StudentApplications;