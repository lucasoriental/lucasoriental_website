"use client";

import { useProjects } from "@/hooks/useProjects";

const ProjectsSection = () => {
  const { projects, loading } = useProjects();

  return (
    <div>
      <h1>Projects Section</h1>
      <p>This is the projects section of the freelance page.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsSection;
