// CSS prefix: .about
import "./style.css";

function About() {
  return (
    <section id="about" className="landing-section">
      <div className="about-content">
        <h2 className="about-h2">About Us</h2>
        <p className="about-desc">
          This project was inspired by my childhood love for Atari games and my
          passion for web development. As a Portfolio Project for Holberton
          School, I embarked on this journey to combine nostalgia with modern
          technology.
        </p>

        <p className="about-github">
          GitHub Repository:{" "}
          <a
            href="https://github.com/AhmedElbohoty/atari-game-web-adventures"
            target="_blank"
            className="about-github-link"
          >
            Atari Game Web Adventures
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
