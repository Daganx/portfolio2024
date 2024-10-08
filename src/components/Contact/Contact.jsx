import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <p>
        Want to work <span className="contact__together">together</span>?
      </p>
      <p className="contact__talk">Let's Talk!</p>
      <div className="contact__button">
        <ul>
          <li>Email</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}
