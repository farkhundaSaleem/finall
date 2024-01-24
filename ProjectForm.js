// src/components/ProjectForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectForm = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    title: '',
    developer: '',
    description: '',
    hostedURL: '',
  });

  const handleInputChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('your_backend_api/submit-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        // Assuming successful form submission, redirect to the same page
        // You can redirect to another page if needed
        navigate('/submit-project');
      } else {
        console.error('Form submission failed:', response.statusText);
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Welcome to the Project Sharing App</h2>
      <form>
        <label htmlFor="title">Project Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={projectData.title}
          onChange={handleInputChange}
        />

        <label htmlFor="developer">Developer Name:</label>
        <input
          type="text"
          id="developer"
          name="developer"
          value={projectData.developer}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={projectData.description}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="hostedURL">Hosted URL:</label>
        <input
          type="text"
          id="hostedURL"
          name="hostedURL"
          value={projectData.hostedURL}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleSubmit}>
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
