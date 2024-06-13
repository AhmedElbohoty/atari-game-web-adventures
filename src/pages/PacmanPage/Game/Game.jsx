import { useSwipeable } from "react-swipeable";
import { useDispatch, useSelector } from "react-redux";

import {
  GRID_SIZE,
  CELL_SIZE,
  OBJECT_TYPE,
  DIRECTIONS,
} from "services/constants";
import {
  selectGrid,
  selectPacDir,
  selectPacPos,
} from "store/appSlice/selectors";

import { movePacman, updatePacDir } from "store/appSlice/slice";

// CSS prefix: .pacman-game-
import "./style.css";

function Game() {
  const { ref } = useSwipeable({
    onSwipedRight,
    onSwipedLeft,
    onSwipedUp,
    onSwipedDown,
  });
  const dispatch = useDispatch();
  const grid = useSelector(selectGrid);
  const pacDir = useSelector(selectPacDir);
  const pacPos = useSelector(selectPacPos);

  const elements = grid.map(({ classList }, index) => {
    const style = {
      width: `${CELL_SIZE}px`,
      height: `${CELL_SIZE}px`,
    };

    if (classList.includes(OBJECT_TYPE.PACMAN)) {
      style.rotate = `${pacDir?.rotation}deg`;
    }
    return (
      <div key={index} className={`${classList.join(" ")}`} style={style}></div>
    );
  });

  function handleSwipe(dir) {
    const nextMovePos = pacPos + dir.movement;
    if (grid[nextMovePos].classList.includes(OBJECT_TYPE.WALL)) return;

    dispatch(updatePacDir(dir));
    dispatch(movePacman());
  }

  function onSwipedLeft({ event }) {
    event.stopPropagation();
    handleSwipe(DIRECTIONS.ArrowRight);
  }

  function onSwipedRight({ event }) {
    event.stopPropagation();
    handleSwipe(DIRECTIONS.ArrowLeft);
  }

  function onSwipedUp({ event }) {
    event.stopPropagation();
    handleSwipe(DIRECTIONS.ArrowDown);
  }

  function onSwipedDown({ event }) {
    event.stopPropagation();
    handleSwipe(DIRECTIONS.ArrowUp);
  }

  const style = { gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)` };
  return (
    <div ref={ref} className="pacman-game" style={style}>
      {elements}
    </div>
  );
}

export default Game;
