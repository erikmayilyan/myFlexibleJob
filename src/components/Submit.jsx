import React from 'react';
import './Submit.css';

const Submit = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Application submitted successfully!");
    onClose();
  };

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(event) => event.stopPropagation()}>
        <h2>APPLY NOW</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required/>
          <input type="email" placeholder="Email" required/>
          <label>Cover Letter</label>
          <textarea
            placeholder="Write your cover letter here..."
            rows="6"
            required
          />
          <label>Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
          />
          <button className='submit-btn' type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  )
}

export default Submit
