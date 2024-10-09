import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import SideMenu from "../sideMenu/sideMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour scroller jusqu'à une section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar__header" id="navbar">
        <h2 className="navbar__location">Bordeaux, FR</h2>
        <h3 className="navbar__name">Portfolio</h3>
        <div className="navbar__menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBurger} size="1x" />
        </div>
      </nav>

      <SideMenu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />
    </>
  );
}
