import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar__header">
      <h2 className="navbar__location">Bordeaux, FR</h2>
      <h3 className="navbar__name">Portfolio</h3>
      <div className="navbar__menu">
        <p>☰</p>{" "}
      </div>
    </nav>
  );
}
