import { useRef, useState } from "react";
import { CLASS_LIST, LEVEL, OBJECT_TYPE } from "services/constants";

import { PacmanGameContext } from "services/context";

function PacmanGameProvider({ children }) {
  const count = useRef(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [win, setWin] = useState(false);
  const [powerPillActive, setPowerPillActive] = useState(false);
  const [powerPillTimer, setPowerPillTimer] = useState(null);

  const elements = LEVEL.map((square, index) => {
    if (CLASS_LIST[square] === OBJECT_TYPE.DOT) count.current++;

    return {
      index,
      square,
      classList: ["sqaure"],
    };
  });
  const [grid, setGrid] = useState(elements);

  function gameOver(pacman, grid) {}

  function checkCollision(pacman, ghosts) {}

  function gameLoop(pacman, ghosts) {}

  function startGame() {}

  function addObject(pos, classes = []) {
    const newGrid = [...grid];

    classes.forEach((cls) => {
      newGrid[pos].classList.push(cls);
    });
    setGrid(newGrid);
  }

  function removeObject(pos, classes = []) {
    const newGrid = [...grid];
    newGrid[pos].classList = newGrid[pos].classList.filter((cls) =>
      classes.includes(cls)
    );
    setGrid(newGrid);
  }

  function objectExist(pos, object) {
    return grid[pos].classList.includes(object);
  }

  const value = {
    score,
    setScore,

    timer,
    setTimer,

    win,
    setWin,

    powerPillActive,
    setPowerPillActive,

    powerPillTimer,
    setPowerPillTimer,

    grid,
    setGrid,

    gameOver,
    checkCollision,
    gameLoop,
    startGame,

    addObject,
    removeObject,
    objectExist,
  };

  return (
    <PacmanGameContext.Provider value={value}>
      {children}
    </PacmanGameContext.Provider>
  );
}
export default PacmanGameProvider;
