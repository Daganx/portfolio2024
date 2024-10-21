import React from "react";
import "./GalleryModal.css";

export default function GalleryModal({ project, isActive, onClose }) {
  return (
    <section className={`gallery__item__details ${isActive ? "show" : ""}`}>
      <h2>{project.technologies.join(", ")}</h2>
      <p>{project.description}.</p>
      <button>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Code Source
        </a>
      </button>
      <button onClick={onClose}>Fermer</button>
    </section>
  );
}
