import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button
        type="button"
        className="btn btn-outline-warning button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default About;
