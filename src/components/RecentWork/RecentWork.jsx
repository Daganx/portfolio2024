import "./RecentWork.css";
import Project1 from "../../assets/images/project1.jpg";
import Project2 from "../../assets/images/project3.jpg";

export default function RecentWork() {
  return (
    <section className="recent__works">
      <article className="work__item">
        <img src={Project1} alt="Projet 1" className="work__image" />
        <p className="work__title">
          Project#1<span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          AvroKO is an award-winning global design firm, established itself as a
          global leader.
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
          Project#2<span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          The Roger Hub is an immersive web experience showcasing.
        </p>
      </article>
    </section>
  );
}
