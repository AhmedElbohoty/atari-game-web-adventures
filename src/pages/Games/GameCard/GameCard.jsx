import { Link } from "react-router-dom";

// CSS prefix: .game-card-
import "./style.css";

function GameCard({ label, img, alt = "image", href }) {
  if (href) {
    return (
      <Link className="game-card" to={href}>
        <img className="game-card-img" src={img} alt={alt} />
        <p>{label}</p>
      </Link>
    );
  }

  return (
    <div className="game-card">
      <p>{label}</p>
    </div>
  );
}

export default GameCard;
