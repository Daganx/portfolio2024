import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import "./SideMenu.css";

export default function SideMenu({ menuOpen, toggleMenu, scrollToSection }) {
  const menuRef = useRef(null);

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
          <a
            href="https://drive.google.com/file/d/1YamGRtYdAqBuSCXJyFttpO938i1TJdl6/view?usp=sharing"
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
