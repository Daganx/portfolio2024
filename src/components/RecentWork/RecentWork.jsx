import "./RecentWork.css";

export default function RecentWork() {
  return (
    <section className="profile__works">
      <div className="work__item">
        <img src="" alt="Projet 1" className="profile__image" />
        <p className="work__title">
          PROJECT#1<span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          AvroKO is an award-winning global design firm, established itself as a
          global leader.
        </p>
      </div>
      <div className="work__item center-text">
        <p className="work__title">NEW WORKS!</p>
        <p className="work__description work__description__middle">
          A Featured selection of the latest work -- of the last months.
        </p>
      </div>
      <div className="work__item">
        <img src="" alt="Projet 2" />
        <p className="work__title">
          PROJECT#2<span className="new-label">NEW</span>
        </p>
        <p className="work__description">
          The Roger Hub is an immersive web experience showcasing.
        </p>
      </div>
    </section>
  );
}
