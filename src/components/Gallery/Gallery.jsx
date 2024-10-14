import React, { useState } from "react";
import projectsData from "../../data/projects.json";
import ProjectImage1 from "../../assets/images/artparis/artparis.webp";
import ProjectImage2 from "../../assets/images/sportsee/sportsee.webp";
import ProjectImage3 from "../../assets/images/lespetitsplats/lespetitsplats2.webp";
import LeftArrow from "../../assets/images/leftarrow.png";
import RightArrow from "../../assets/images/rightarrow.png";
import "./Gallery.css";

// Mapper les images aux projets
const projectImages = {
  "parisArt.webp": ProjectImage1,
  "bikeShop.webp": ProjectImage2,
  "lespetitsplats2.webp": ProjectImage3,
};

// Fonction pour ajouter les images aux projets depuis le fichier JSON
const enrichProjectsWithImages = (projects) => {
  return projects.map((project) => ({
    ...project,
    image: projectImages[project.image],
  }));
};

// Fonction de rendu pour les technologies d'un projet
const renderTechnologies = (technologies) => {
  return (
    <ul className="technology-list">
      {technologies.map((tech, index) => (
        <li key={index}>/ {tech}</li>
      ))}
    </ul>
  );
};

export default function Gallery() {
  // Charger et enrichir les projets avec les images
  const projects = enrichProjectsWithImages(projectsData);
  // État pour suivre l'index du projet courant et gérer la visibilité du contenu
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  // Fonction pour aller au projet suivant
  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  // Fonction pour aller au projet précédent
  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  // Récupérer les informations du projet courant
  const {
    title,
    description,
    descriptionTechnologies,
    technologies,
    image,
    githubLink,
  } = projects[currentProjectIndex];

  return (
    <div className="project-display">
      <h2 className="project-title">{title}</h2>
      {renderTechnologies(technologies)}
      <p className="project-description">{description}</p>
      <p className="project-description-techno">{descriptionTechnologies}</p>
      <hr className="project-separator" />

      <div className="project-navigation">
        {/* Flèche précédente */}
        <button className="arrow left-arrow" onClick={handlePreviousProject}>
          <img src={LeftArrow} className="left-arrow-png"></img>
        </button>

        {/* Image du projet */}
        <div className="project-image-container">
          <a href={githubLink} target="blank">
            <img src={image} alt={description} className="project-image" />
          </a>
        </div>

        {/* Flèche suivante */}
        <button className="arrow right-arrow" onClick={handleNextProject}>
          <img src={RightArrow} className="right-arrow-png"></img>
        </button>
      </div>
    </div>
  );
}
