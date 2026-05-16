import React from "react";
import jobs from "../assets/jobs.json";
import { useNavigate } from "react-router-dom";
import "./Manage.css";

const Manage = () => {
  const navigate = useNavigate();

  const amazonJobs = jobs.jobs.filter(
    (job) => job.company_name === "Amazon Media EU S.à r.l."
  );

  const handleEdit = (id) => {
    console.log("Edit", id);
    navigate(`/dashboard/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  const handleList = (id) => {
    console.log("List", id);
    navigate(`/dashboard/list/${id}`);
  };

  return (
    <div className="manage">
      {amazonJobs.map((job) => (
        <div
          key={job.id}
          className="manage-jobs"
        >
          <div className="manage-job">
            <img
              src={job.image}
              alt={job.company_name}
            />
            <div>
              <h2 className="manage-position">
                {job.position_name}
              </h2>
              <p>
                {job.company_name}
              </p>
            </div>
          </div>
          <p className="manage-desc">
            {job.description.length > 100
              ? `${job.description.slice(0, 100)}...`
              : job.description}
          </p>
          <div className="manage-management">
            <button
              onClick={() => handleEdit(job.id)}
              className="manage-edit"
            >
              Edit
            </button>
            <button
              onClick={() => handleList(job.id)}
              className="manage-list"
            >
              List of Applicants
            </button>
            <button
              onClick={() => handleDelete(job.id)}
              className="manage-delete"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manage;