import "./RecentWork.css";
import ParisArt from "../../assets/images/artparis/artparis.webp";
import PomodoroApp from "../../assets/images/pomodoro/pomodoro.webp";

export default function RecentWork() {
  return (
    <section className="recent__works">
      <article className="work__item">
        <a href="https://github.com/daganx/gallery__symfony" target="_blank">
          <img src={ParisArt} alt="Projet 1" className="work__image" />
        </a>
        <p className="work__title">
          <a
            href="https://www.github.com/daganx/parisart"
            target="_blank"
            rel="noopener noreferrer"
          >
            PARIS.ART
          </a>
          <span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          PARIS.ART is an open vitrin to the best paintings of this agency
          established in Paris.
        </p>
      </article>
      <article className="work__item center-text">
        <p className="work__title title__middle">Recent Work!</p>
        <p className="work__description work__description__middle">
          A Featured selection of the latest work -- of the last months.
        </p>
      </article>
      <article className="work__item">
        <a href="https://daganx.github.io/pomodoro-app/" target="_blank">
          <img
            src={PomodoroApp}
            alt="Projet 2"
            className="work__image work__image__2"
          />
        </a>
        <p className="work__title">
          <a
            href="https://www.github.com/daganx/pomodoro-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            POMODORO.APP
          </a>
          <span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          An app developed to help you manage your time and improve your
          productivity.
        </p>
      </article>
    </section>
  );
}
