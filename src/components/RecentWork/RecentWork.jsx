import "./RecentWork.css";
import ParisArt from "../../assets/images/artparis/artparis.webp";
import SportSee from "../../assets/images/sportsee/sportsee.webp";

export default function RecentWork() {
  return (
    <section className="recent__works">
      <article className="work__item">
        <img src={ParisArt} alt="Projet 1" className="work__image" />
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
        <img src={SportSee} alt="Projet 2" className="work__image" />
        <p className="work__title">
          <a
            href="https://www.github.com/daganx/sportsee"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPORTSEE
          </a>
          <span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          An app to track your session and calories burned features.
        </p>
      </article>
    </section>
  );
}
