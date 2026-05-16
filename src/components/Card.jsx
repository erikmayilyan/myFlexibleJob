import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const Card = ({ job }) => {
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const handleApplyClick = (event) => {
    event.stopPropagation();
    const jobPath = `/jobs/${job.id}`;
    if (getStoredUser()) {
      navigate(jobPath, { state: { openApply: true } });
      return;
    }
    navigate('/login', {
      state: { from: jobPath, openApplyOnReturn: true },
    });
  };

  return (
    <div className='card' onClick={() => navigate(`/jobs/${job.id}`)}>
      <div className='card-header'>
        <img src={job.image} alt={job.company_name} className="card-img" />
        <div className='card-title'>
          <h3>{job.position_name}</h3>
          <h4>{job.company_name}</h4>
        </div>
      </div>
      <div className='info'>
        <p className='description'>
          {job.description.length > 50 ? (
            <>
              {job.description.slice(0, 50)}...
              <span className="see-more"> See More</span>
            </>
          ) : (
            job.description
          )}
        </p>
        <p className='open-close'>Opening Date: {formatDate(job.opening_date)}</p>
        <p className='open-close'>Closing Date: {formatDate(job.closing_date)}</p>
        <button type="button" onClick={handleApplyClick}>APPLY NOW</button>
      </div>
    </div>
  )
};

export default Card
