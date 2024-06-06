import Intro from "pages/LandingPage/Intro/Intro";
import Features from "pages/LandingPage/Features/Features";
import About from "pages/LandingPage/About/About";

// CSS prefix: .landing-
import "./style.css";

function LandingPage() {
  return (
    <div className="landing">
      <Intro />

      <Features />

      <About />
    </div>
  );
}

export default LandingPage;
