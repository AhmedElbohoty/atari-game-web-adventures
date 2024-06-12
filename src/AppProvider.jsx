import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBAL_SPEED, OBJECT_TYPE } from "services/constants";

import { AppContext } from "services/context";

import {
  addObject,
  moveGhosts,
  movePacman,
  updateGameWin,
  updatePacPos,
  updatePacSpeed,
  updatePowerPillActive,
  updateScore,
} from "store/appSlice/slice";

function Provider({ children }) {
  const timer = useRef(null);
  const dispatch = useDispatch();

  function gameOver(pacman, grid) {}

  function checkCollision(pacman, ghosts) {}

  function gameLoop() {
    dispatch(movePacman());

    dispatch(moveGhosts());
  }

  function startGame() {
    // Reset game
    dispatch(updateScore(0));
    dispatch(updateGameWin(false));
    dispatch(updatePowerPillActive(false));

    // Create pacman
    dispatch(updatePacPos(287));
    dispatch(updatePacSpeed(2));
    dispatch(addObject({ pos: 287, classes: [OBJECT_TYPE.PACMAN] }));

    timer.current = setInterval(() => gameLoop(), GLOBAL_SPEED);
  }

  const contextValue = { timer, startGame };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default Provider;
