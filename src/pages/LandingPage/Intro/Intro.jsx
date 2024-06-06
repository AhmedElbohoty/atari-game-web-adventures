import { Link } from "react-router-dom";

import atariImg from "assets/atari.png";

// CSS prefix: .intro-
import "./style.css";

function Intro() {
  return (
    <section id="intro" className="landing-section">
      <div className="intro-cover-image">
        <img src={atariImg} alt="Atari Game Web Adventures" />
      </div>
      <div>
        <h1 className="intro-h1">Atari Game Web Adventures</h1>
        <p className="intro-h1-desc">
          Rediscover the magic of the Atari game in your browser!
        </p>
        <nav className="intro-nav">
          <a href="#features" className="intro-link">
            Features
          </a>
          <a href="#about" className="intro-link">
            About
          </a>
          <Link to="/games" className="intro-link">
            Play Now
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Intro;
