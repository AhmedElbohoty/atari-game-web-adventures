import { Link } from "react-router-dom";

import atariImg from "assets/atari.png";

// CSS prefix: .app-header
import "./style.css";

function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/" className="app-header-logo">
        <img src={atariImg} alt="Atari Game Web Adventures" />
      </Link>

      <Link to="games" className="app-header-link">
        Games
      </Link>
    </header>
  );
}

export default AppHeader;
