import React, { useState } from 'react';
import "./SubmitJob.css";

const SubmitJob = () => {
  const [jobData, setJobData] = useState({
    company_name: "",
    position_name: "",
    image: "",
    opening_date: "",
    closing_date: "",
    description: "",
    responsibilities: "",
    requirements: "",
  });

  const handleChange = (event) => {
    setJobData({
      ...jobData,
      [event.target.name] : event.target.value 
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedJob = {
      ...jobData,
      responsibilites: jobData.responsibilities
        .split("\n")
        .filter((item) => item.trim() !== ""),
      requirements: jobData.requirements
        .split("\n")
        .filter((item) => item.trim() !== ""),
    };

    console.log(formattedJob);
  };

  return (
    <div className='submit-job'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={jobData.company_name}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="position_name"
          placeholder="Position Name"
          value={jobData.position_name}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="image"
          placeholder="Image Path"
          value={jobData.image}
          onChange={handleChange}
        />
        <div className="submit-job-dates">
          <div>
            <label htmlFor="opening_date">Opening Date</label>
            <input
              id="opening_date"
              type="date"
              name="opening_date"
              value={jobData.opening_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="closing_date">Closing Date</label>
            <input
              id="closing_date"
              type="date"
              name="closing_date"
              value={jobData.closing_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
        />
        <textarea
          name="responsibilities"
          placeholder="Responsibilities (one per line)"
          value={jobData.responsibilities}
          onChange={handleChange}
        />
        <textarea
          name="requirements"
          placeholder="Requirements (one per line)"
          value={jobData.requirements}
          onChange={handleChange}
        />
        <button type="submit">Submit Job</button>
      </form>
    </div>
  )
}

export default SubmitJob
