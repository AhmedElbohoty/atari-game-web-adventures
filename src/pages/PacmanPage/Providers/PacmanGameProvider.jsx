import { useEffect, useRef, useState } from "react";
import { CLASS_LIST, DIRECTIONS, LEVEL, OBJECT_TYPE } from "services/constants";

import { PacmanGameContext } from "services/context";

function PacmanGameProvider({ children }) {
  const count = useRef(0);
  const [score, setScore] = useState(0);
  const [gameWin, setGameWin] = useState(false);
  const [powerPillActive, setPowerPillActive] = useState(false);
  const [powerPillTimer, setPowerPillTimer] = useState(null);

  const [pos, setPos] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [dir, setDir] = useState(null);
  const [timer, setTimer] = useState(0);
  const [powerPill, setPowerPill] = useState(false);
  const [rotation, setRotation] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyInput);

    return () => document.removeEventListener("keydown", handleKeyInput);
  }, [pos]);

  const elements = LEVEL.map((square, index) => {
    if (CLASS_LIST[square] === OBJECT_TYPE.DOT) count.current++;

    return {
      index,
      square,
      classList: ["sqaure", CLASS_LIST[square]],
    };
  });
  const [grid, setGrid] = useState(elements);

  function gameOver(pacman, grid) {}

  function checkCollision(pacman, ghosts) {}

  function gameLoop(pacman, ghosts) {}

  function startGame() {}

  function moveCharacter() {}

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

  function shouldMove() {
    if (!dir) return false;

    if (timer === speed) {
      setTimer(0);
      return true;
    }

    setTimer(timer + 1);
  }

  function getNextMove() {
    let nextMovePos = pos + dir.movement;

    if (
      objectExist(nextMovePos, [OBJECT_TYPE.WALL]) ||
      objectExist(nextMovePos, [OBJECT_TYPE.GHOSTLAIR])
    ) {
      nextMovePos = pos;
    }

    return { nextMovePos, direction: dir };
  }

  function makeMove() {
    const classessToRemove = [OBJECT_TYPE.PACMAN];
    const classesToAdd = [OBJECT_TYPE.PACMAN];

    return { classessToRemove, classesToAdd };
  }

  function setNewPos(nextMovePos) {
    setNewPos(nextMovePos);
  }

  function handleKeyInput(e) {
    let dir;

    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTIONS[e.key];
    } else {
      return;
    }

    const nextMovePos = pos + dir.movement;
    if (objectExist(nextMovePos, [OBJECT_TYPE.WALL])) return;

    setDir(dir);
  }

  const value = {
    score,
    setScore,

    timer,
    setTimer,

    gameWin,
    setGameWin,

    powerPillActive,
    setPowerPillActive,

    powerPillTimer,
    setPowerPillTimer,

    grid,
    setGrid,

    pos,
    setPos,

    speed,
    setSpeed,

    dir,
    setDir,

    powerPill,
    setPowerPill,

    rotation,
    setRotation,

    shouldMove,
    getNextMove,
    makeMove,
    setNewPos,
    handleKeyInput,

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
