import GameCard from "pages/GamesPage/GameCard/GameCard";

import pacmanIcon from "assets/pacman.png";

// CSS prefix: .games-
import "./style.css";

function Games() {
  return (
    <div className="games">
      <h1 className="games-h1">Atari Game Web Adventures</h1>

      <main className="games-main">
        <GameCard
          label="Pacman"
          img={pacmanIcon}
          alt="pacman icon"
          href="/games/pacman"
        />
        <GameCard label="Coming soon..." ialt="pacman icon" />
      </main>
    </div>
  );
}

export default Games;
