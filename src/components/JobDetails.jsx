import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import jobsData from '../assets/jobs.json';
import Submit from './Submit';
import './JobDetails.css';

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const job = jobsData.jobs.find(j => j.id === Number(id));

  useEffect(() => {
    if (location.state?.openApply) {
      setOpenModal(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  const handleApplyNow = () => {
    if (getStoredUser()) {
      setOpenModal(true);
      return;
    }
    navigate('/login', {
      state: { from: `/jobs/${id}`, openApplyOnReturn: true },
    });
  };

  if (!job) {
    return <p>Job Not Found</p>;
  }

  return (
    <div className='job-details'>
      <div className='job-name'>
        <h1>{job.position_name}</h1>
        <h2>{job.company_name}</h2>
      </div>
      <div className='job-header'>
        <img src={job.image} alt={job.company_name} />
        <div className='job-desc'>
          <p className='job-desc-more'>{job.description}</p>
          <h3>Responsibilities</h3>
          <ul>
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <h3>Requirements</h3>
          <ul>
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
          </ul>
          <p>Opening Date: {job.opening_date}</p>
          <p>Closing Date: {job.closing_date}</p>
          <button type="button" onClick={handleApplyNow}>Apply Now</button>
        </div>
      </div>
      <Submit isOpen={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default JobDetails
