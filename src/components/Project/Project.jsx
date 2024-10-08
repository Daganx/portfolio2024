import React, { useState } from "react";
import "./Project.css";
import ProjectImage1 from "../../assets/images/project1.jpg";
import ProjectImage2 from "../../assets/images/project1.jpg";
import ProjectImage3 from "../../assets/images/project1.jpg";

export default function Project() {
  // Liste des projets
  const projects = [
    {
      id: 1,
      title: "PROJECT_",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      technologies: ["REACT", "REDUX", "GIT"],
      image: ProjectImage1,
    },
    {
      id: 2,
      title: "PROJECT_",
      description:
        "Ab alias debitis sed sunt? Ea beatae voluptatum in suscipit nulla.",
      technologies: ["NODE.JS", "EXPRESS", "MONGODB"],
      image: ProjectImage2,
    },
    {
      id: 3,
      title: "PROJECT_",
      description: "Tenetur inventore! Ea beatae voluptatum in suscipit nulla.",
      technologies: ["JAVASCRIPT", "TYPESCRIPT", "DOCKER"],
      image: ProjectImage3,
    },
  ];

  // État pour suivre l'index du projet courant
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Fonction pour passer au projet suivant
  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Informations du projet actuel
  const { title, description, technologies, image } =
    projects[currentProjectIndex];

  return (
    <>
      <section className="project">
        <div className="project__info">
          <h2>
            {title}{" "}
            <span className="project__number">#{currentProjectIndex + 1}</span>
          </h2>
          <img src={image} alt={title} className="project__info-image" />
          <h3>
            DESC {title}{" "}
            <span className="project__number">#{currentProjectIndex + 1}</span>
          </h3>
          <p>Short Desc :</p>
          <div className="project__info-description">
            <p className="project__info-text">{description}</p>
            <ul className="project__info-techno">
              {technologies.map((tech, index) => (
                <li key={index}>
                  {index + 1}. {tech}
                </li>
              ))}
              <p onClick={handleNextProject} className="next-project">
                Next Project! -
              </p>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
