import React, { useState, useRef, useEffect } from "react";
import projectsData from "../../data/projects.json";
import ProjectImage1 from "../../assets/images/artparis/artparis.webp";
import ProjectImage2 from "../../assets/images/sportsee/sportsee.webp";
import ProjectImage3 from "../../assets/images/lespetitsplats/lespetitsplats2.webp";
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
  return technologies.map((tech, index) => (
    <li key={index}>
      {index + 1}. {tech}
    </li>
  ));
};

export default function Gallery() {
  // Charger et enrichir les projets avec les images
  const projects = enrichProjectsWithImages(projectsData);

  // État pour suivre l'index du projet courant et gérer la visibilité du contenu
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const projectImageRef = useRef(null);

  // Effet pour gérer la transition avec un fondu
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setFadeOut(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  // Fonction pour passer au projet suivant
  const goToNextProject = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      scrollToProjectImage();
    }, 100);
  };

  const scrollToProjectImage = () => {
    setTimeout(() => {
      if (projectImageRef.current) {
        projectImageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
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
    <section className="projects" id="projects">
      <article className="project__info">
        <h2>{title} </h2>

        <img
          src={image}
          alt={title}
          className="project__info-image"
          ref={projectImageRef}
        />

        <div className={`project__content ${fadeOut ? "fade-out" : "fade-in"}`}>
          <h3>
            {title}{" "}
            <span className="project__number">#{currentProjectIndex + 1}</span>
          </h3>
          <div className="project__code__container">
            <a href={githubLink} target="_blank" className="project__code">
              Code
            </a>
          </div>

          <div className="project__info-description">
            <p className="project__info-text">
              {description}
              <br></br>
              <br></br>
              {descriptionTechnologies}
            </p>

            <ul className="project__info-techno">
              {renderTechnologies(technologies)}
              <p onClick={goToNextProject} className="next-project">
                Next Project!
              </p>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
