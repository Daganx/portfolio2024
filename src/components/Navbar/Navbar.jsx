import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="profile__header">
      <h2 className="profile__location">Bordeaux, FR</h2>
      <h3 className="profile__name">Portfolio</h3>
      <div className="profile__menu">
        <p>☰</p>{" "}
      </div>
    </nav>
  );
}
