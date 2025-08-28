// ProjectsSection.jsx
import React, { useState } from "react";

// Sample data
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    type: "Personal",
    techStack: "React, Tailwind CSS",
    link: "https://my-portfolio-koilraj.vercel.app/"
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <section className="projects-section p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons flex gap-4 mb-6">
        {["All", "Personal", "Company"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    
      {/* Projects Grid */}
      <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-card p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <p className="mb-2">
              <strong>Type:</strong> {project.type}
            </p>
            <p className="mb-4">
              <strong>Tech:</strong> {project.techStack}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
