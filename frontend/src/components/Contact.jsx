import { Link } from "react-router-dom";
import "./Scoring.css";

function Contact() {
  return (
    <div className="btn-container">
      <div className="small-contact">
        <Link to="/register" className="contact-text">
          Je voudrais être contacté
        </Link>
      </div>
      <div className="small-contact">
        <Link to="/" className="contact-text">
          Je ne voudrais pas être contacté
        </Link>
      </div>
    </div>
  );
}

export default Contact;
