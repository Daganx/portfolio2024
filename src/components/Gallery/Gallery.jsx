import React, { useState } from "react";
import projectData from "../../data/projectsData"; // Import des données
import GalleryModal from "../GalleryModal/GalleryModal";
import "./Gallery.css";

export default function Gallery() {
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  return (
    <div className="gallery" id="projects">
      <div className="gallery__container">
        {projectData.map((project, index) => (
          <div
            className="gallery__item"
            key={index}
            onClick={() => handleClick(index)}
          >
            <img
              className="gallery__item__image"
              src={project.src}
              alt={project.title}
            />
            <div className="gallery__item__overlay">
              <p>{project.title}</p>
            </div>

            <GalleryModal
              project={project}
              isActive={activeProject === index}
              onClose={() => setActiveProject(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
