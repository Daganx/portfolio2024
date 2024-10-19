import React, { useState } from "react";
import ParisArt from "../../assets/images/artparis/artparis.webp";
import SportSee from "../../assets/images/sportsee/sportsee.webp";
import LesPetitsPlats from "../../assets/images/lespetitsplats/lespetitsplats.webp";
import PomodoroApp from "../../assets/images/pomodoro/pomodoro.jpg";
import ToDoListApp from "../../assets/images/todolist/todolist.jpg";
import Kasa from "../../assets/images/kasa/kasa.webp";
import "./Gallery.css";

export default function Gallery() {
  const [activeProject, setActiveProject] = useState(null); // État pour stocker le projet actif

  const handleClick = (project) => {
    setActiveProject(activeProject === project ? null : project); // Ouvre/ferme la div
  };

  const projectData = [
    { src: ParisArt, title: "Paris Art", tech: "React" },
    { src: SportSee, title: "SportSee", tech: "Node.js" },
    { src: Kasa, title: "Kasa", tech: "React" },
    { src: LesPetitsPlats, title: "Les Petits Plats", tech: "Node.js" },
    { src: PomodoroApp, title: "Pomodoro-App", tech: "React" },
    { src: ToDoListApp, title: "ToDoList-App", tech: "React / Redux" },
  ];

  return (
    <div className="gallery" id="projects">
      <div className="gallery__container">
        {projectData.map((project, index) => (
          <div className="gallery__item" key={index} onClick={() => handleClick(index)}>
            <img className="gallery__item__image" src={project.src} alt={project.title} />
            <div className="gallery__item__overlay">
              <p>{project.title}</p>
              <p>{project.tech}</p>
            </div>

            {/* Affichage de la div supplémentaire avec classe show si le projet est actif */}
            <div className={`gallery__item__details ${activeProject === index ? 'show' : ''}`}>
              <h2>{project.title}</h2>
              <p>Plus d'informations sur {project.title}.</p>
              <button onClick={() => setActiveProject(null)}>Fermer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
