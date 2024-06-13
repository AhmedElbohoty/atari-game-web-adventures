import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { GLOBAL_SPEED, OBJECT_TYPE, POWER_PILL_TIME } from "services/constants";

import { AppContext } from "services/context";
import { selectIsPosHasClass } from "store/appSlice/selectors";

import soundDot from "sounds/munch.wav";
import soundPill from "sounds/pill.wav";
import soundGameStare from "sounds/game_start.wav";
import soundGameOver from "sounds/death.wav";
import soundGhost from "sounds/eat_ghost.wav";

import {
  addObject,
  addScore,
  decrementDotCount,
  moveGhosts,
  movePacman,
  removeObject,
  resetGhostPos,
  updateGameWin,
  updateGhostsScared,
  updatePacPos,
  updatePacPowerPill,
  updatePacSpeed,
  updatePowerPillActive,
  updateScore,
} from "store/appSlice/slice";
import store from "store/store";

function Provider({ children }) {
  const timer = useRef(null);
  const powerPillTimer = useRef(null);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  function gameOver() {
    playAudio(soundGameOver);
    clearInterval(timer.current);
    clearInterval(powerPillTimer.current);
    setIsPlaying(false);
  }

  function checkCollision() {
    const { pacman, ghosts } = store.getState().app;

    const collidedGhostName = Object.keys(ghosts).find(
      (key) => pacman.pos === ghosts[key].pos
    );

    if (!collidedGhostName) return;

    if (pacman.powerPill) {
      playAudio(soundGhost);
      dispatch(addScore(100));
      dispatch(
        removeObject({
          pos: ghosts[collidedGhostName].pos,
          classes: [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, collidedGhostName],
        })
      );
      dispatch(resetGhostPos(collidedGhostName));
    } else {
      gameOver();
    }
  }

  function checkEatDot() {
    const storeState = store.getState();
    const { pacman } = storeState.app;

    const isDot = selectIsPosHasClass(storeState, pacman.pos, OBJECT_TYPE.DOT);
    if (!isDot) return;

    playAudio(soundDot);
    dispatch(decrementDotCount());
    dispatch(removeObject({ pos: pacman.pos, classes: [OBJECT_TYPE.DOT] }));
    dispatch(addScore(10));
  }

  function checkEatPill() {
    const storeState = store.getState();
    const { pacman } = storeState.app;

    const isPill = selectIsPosHasClass(
      storeState,
      pacman.pos,
      OBJECT_TYPE.PILL
    );
    if (!isPill) return;

    playAudio(soundPill);

    dispatch(removeObject({ pos: pacman.pos, classes: [OBJECT_TYPE.PILL] }));
    dispatch(updatePacPowerPill(true));
    dispatch(updateGhostsScared(true));
    dispatch(addScore(50));

    clearInterval(powerPillTimer.current);
    powerPillTimer.current = setInterval(() => {
      dispatch(updatePacPowerPill(false));
      dispatch(updateGhostsScared(false));
    }, POWER_PILL_TIME);
  }

  function gameLoop() {
    const storeState = store.getState();
    const { dotCount } = storeState.app;

    dispatch(movePacman());
    dispatch(moveGhosts());

    checkCollision();
    checkEatDot();
    checkEatPill();

    if (dotCount === 0) {
      dispatch(updateGameWin(true));
      gameOver();
    }
  }

  function startGame() {
    if (isPlaying) return;

    playAudio(soundGameStare);
    setIsPlaying(true);

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

  function playAudio(audio) {
    const sound = new Audio(audio);
    sound.play();
  }

  const contextValue = { timer, startGame, isPlaying };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default Provider;
