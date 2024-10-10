import "./RecentWork.css";
import Project1 from "../../assets/images/artparis/artparis.webp";
import Project2 from "../../assets/images/bikeshop/bikeshop.jpg";

export default function RecentWork() {
  return (
    <section className="recent__works">
      <article className="work__item">
        <img src={Project1} alt="Projet 1" className="work__image" />
        <p className="work__title">
          PARIS.ART<span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          PARIS.ART is an open vitrin to the best paintings of this agency established in Paris, capital of Culture.
        </p>
      </article>
      <article className="work__item center-text">
        <p className="work__title title__middle">Recent Work!</p>
        <p className="work__description work__description__middle">
          A Featured selection of the latest work -- of the last months.
        </p>
      </article>
      <article className="work__item">
        <img src={Project2} alt="Projet 2" className="work__image" />
        <p className="work__title">
          BIKESHOP<span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          BikeShop is the shop you need if you are a passionate of biking ! 
        </p>
      </article>
    </section>
  );
}
