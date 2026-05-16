import { useParams } from "react-router-dom";
import jobsData from "../assets/jobs.json";
import { useState } from "react";
import "./EditJob.css";

const EditJob = () => {
  const { id } = useParams();

  const job = jobsData.jobs.find(
    (j) => j.id === Number(id)
  );

  const [form, setForm] = useState({
    position_name: job?.position_name || "",
    description: job?.description || "",
    company_name: job?.company_name || "",
    responsibilities: job?.responsibilities || "",
    requirements: job?.requirements || ""
  });

  if (!job) {
    return <p>Job Not Found</p>;
  };

  return (
    <div className="edit-page">
      <h1>EDIT THE JOB FOR {form.position_name}</h1>
      <div className="edit-group">
        <label>Position Name</label>
        <input 
          value={form.position_name}
          className="edit-input"
          onChange={(event) => setForm({
            ...form, 
            position_name: event.target.value
          })}
        />
      </div>
      <div className="edit-group">
        <textarea
          value={form.responsibilities} 
          className="edit-textarea"
          onChange={(event) => setForm({
            ...form,
            responsibilities: event.target.value
          })}
        />
       </div>
       <div className="edit-group">
        <textarea 
          value={form.description}
          className="edit-textarea"
          onChange={(event) => setForm({
            ...form,
            description: event.target.value
          })}
        />
      </div>
      <div className="edit-group">
        <textarea
          value={form.requirements}
          className="edit-textarea"
          onChange={(event) => setForm({
            ...form,
            requirements: event.target.value
          })}
        />
      </div>
      <div className="edit-group">
        <input 
          value={form.company_name}
          className="edit-input"
          disabled
        />
      </div>
      <button className="edit-save">
        Save Changes
      </button>
    </div>
  )
};

export default EditJob;