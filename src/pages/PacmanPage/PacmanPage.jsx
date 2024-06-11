import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import StartButton from "pages/PacmanPage/StartButton/StartButton";
import Game from "pages/PacmanPage/Game/Game";
import Score from "pages/PacmanPage/Score/Score";

import { CLASS_LIST, DIRECTIONS, LEVEL, OBJECT_TYPE } from "services/constants";
import {
  movePacman,
  updateDotCount,
  updateGrid,
  updatePacDir,
} from "store/appSlice/slice";
import { selectGrid, selectPacPos } from "store/appSlice/selectors";

// CSS prefix: .pacman-page-
import "./style.css";

function PacmanPage() {
  const dispatch = useDispatch();
  const grid = useSelector(selectGrid);
  const pacPos = useSelector(selectPacPos);

  useEffect(() => {
    let dotCount = 0;
    const grid = LEVEL.map((square, index) => {
      if (CLASS_LIST[square] === OBJECT_TYPE.DOT) dotCount++;

      return {
        index,
        square,
        classList: ["sqaure", CLASS_LIST[square]],
      };
    });

    dispatch(updateGrid(grid));
    dispatch(updateDotCount(dotCount));
  }, []);

  function onKeyDown(e) {
    let dir;

    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTIONS[e.key];
    } else {
      return;
    }

    const nextMovePos = pacPos + dir.movement;
    if (grid[nextMovePos].classList.includes(OBJECT_TYPE.WALL)) return;

    dispatch(updatePacDir(dir));
    dispatch(movePacman());
  }

  return (
    <div className="pacman-page" onKeyDown={onKeyDown} tabIndex={0}>
      <h1 className="pacman-page-h1">Pacman</h1>

      <main className="pacman-page-main">
        <Score />

        <Game />

        <StartButton />
      </main>
    </div>
  );
}

export default PacmanPage;
