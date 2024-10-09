import "./Loader.css";

export default function Loader({ fadeOut }) {
  return (
    <div className={`loader ${fadeOut ? "loader--fade-out" : ""}`}>
      <p className="loader__title">Software Developer</p>
      <section className="loader__content">
        <h2 className="loader__subtitle">Portfolio</h2>
      </section>
      <p className="loader__name">Dagan LETOT</p>
    </div>
  );
}
