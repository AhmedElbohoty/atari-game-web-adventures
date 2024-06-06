import StartButton from "pages/PacmanPage/StartButton/StartButton";
import Game from "pages/PacmanPage/Game/Game";
import Score from "pages/PacmanPage/Score/Score";
import Providers from "pages/PacmanPage/Providers/Providers";

// CSS prefix: .pacman-page-
import "./style.css";

function PacmanPage() {
  return (
    <Providers>
      <div className="pacman-page">
        <h1 className="pacman-page-h1">Pacman</h1>

        <main className="pacman-page-main">
          <Score />

          <Game />

          <StartButton />
        </main>
      </div>
    </Providers>
  );
}

export default PacmanPage;
