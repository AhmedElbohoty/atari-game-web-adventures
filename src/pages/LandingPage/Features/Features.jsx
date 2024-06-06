import levelImg from "assets/level-up.png";
import leaderboardsImg from "assets/leaderboards.png";
import multiplayerImg from "assets/multiplayer.png";

// CSS prefix: .features-
import "./style.css";

function Features() {
  return (
    <section id="features" className="landing-section">
      <h2 className="features-h2">Features</h2>
      <div className="features-content">
        <div className="feature">
          <img src={levelImg} alt="Feature 1" />
          <div>
            <h3 className="feature-h3">Feature 1: Customizable Levels</h3>
            <p className="feature-p">
              Create and share your own custom game levels with other players.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={leaderboardsImg} alt="Feature 2" />
          <div>
            <h3 className="feature-h3">Feature 2: Multiplayer Mode</h3>
            <p className="feature-p">
              Challenge your friends in real-time multiplayer battles.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={multiplayerImg} alt="Feature 3" />
          <div>
            <h3 className="feature-h3">Feature 3: Leaderboards</h3>
            <p className="feature-p">
              Climb the ranks and compete for the top spot on the global
              leaderboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
