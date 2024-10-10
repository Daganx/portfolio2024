import "./Footer.css";

const ContactLinks = () => {
  const links = ["Email", "LinkedIn", "Github"];

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
};

const ScrollToTopButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="contact__scroll-to-top">
      Scroll to Top
    </button>
  );
};

export default function Footer() {
  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="contact" id="contact">
      <p>
        Want to work <span className="contact__together">together</span>?
      </p>
      <p className="contact__talk">Let's Talk !</p>

      <div className="contact__button">
        <ContactLinks />
      </div>

      <p>Dagan LETOT - 2024</p>
      <p>Bordeaux, FR</p>

      <ScrollToTopButton onClick={scrollToTop} />
    </footer>
  );
}
