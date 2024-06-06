import { GRID_SIZE, CELL_SIZE, CLASS_LIST } from "services/constants";
import { usePacmanGameContext } from "services/context";

// CSS prefix: .pacman-game-
import "./style.css";

function Game() {
  const { grid } = usePacmanGameContext();

  const elements = grid.map(({ square }, index) => {
    return (
      <div
        key={index}
        className={`square ${CLASS_LIST[square]}`}
        style={{ width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px` }}
      ></div>
    );
  });

  return (
    <div
      className="pacman-game"
      style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)` }}
    >
      {elements}
    </div>
  );
}

export default Game;
