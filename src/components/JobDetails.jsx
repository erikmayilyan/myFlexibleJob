import { useParams } from 'react-router-dom';
import jobsData from '../assets/jobs.json';
import './JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const job = jobsData.jobs.find(j => j.id === Number(id));
  if (!job) {
    return <p>Job Not Found</p>;
  };

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
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
