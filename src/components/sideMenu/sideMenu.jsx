import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import "./SideMenu.css";

export default function SideMenu({ menuOpen, toggleMenu, scrollToSection }) {
  const menuRef = useRef(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, toggleMenu]);

  return (
    <div ref={menuRef} className={`side-menu ${menuOpen ? "open" : ""}`}>
      <div className="side-menu__close-container" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBurger} size="1x" />
      </div>
      <ul className="side-menu__nav">
        <li>
          {/* Lien vers le CV en PDF */}
          <a
            href="/CV/LETOT_Dagan_1_CV_102024.pdf" // Remplace par le chemin réel vers ton PDF
            target="_blank"
            rel="noopener noreferrer"
          >
            Daganx CV
          </a>
        </li>
        <li>
          <a
            href="https://github.com/daganx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
      </ul>
    </div>
  );
}
