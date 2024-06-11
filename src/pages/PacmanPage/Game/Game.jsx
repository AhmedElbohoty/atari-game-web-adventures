import { useSelector } from "react-redux";

import { GRID_SIZE, CELL_SIZE } from "services/constants";
import { selectGrid, selectPacDir } from "store/appSlice/selectors";

// CSS prefix: .pacman-game-
import "./style.css";

function Game() {
  const grid = useSelector(selectGrid);
  const pacDir = useSelector(selectPacDir);

  const elements = grid.map(({ classList }, index) => {
    const style = {
      width: `${CELL_SIZE}px`,
      height: `${CELL_SIZE}px`,
      rotate: `${pacDir?.rotation}deg`,
    };
    return (
      <div key={index} className={`${classList.join(" ")}`} style={style}></div>
    );
  });

  const style = { gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)` };
  return (
    <div className="pacman-game" style={style}>
      {elements}
    </div>
  );
}

export default Game;
