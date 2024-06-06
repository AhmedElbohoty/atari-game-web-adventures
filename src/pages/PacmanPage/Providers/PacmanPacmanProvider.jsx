import { useEffect, useState } from "react";
import { DIRECTIONS, OBJECT_TYPE } from "services/constants";

import { PacmanPacmanContext, usePacmanGameContext } from "services/context";

const startPos = 0;
const defaultSpeed = 0;

function PacmanPacmanProvider({ children }) {
  const { objectExist } = usePacmanGameContext();

  const [pos, setPos] = useState(startPos);
  const [speed, setSpeed] = useState(defaultSpeed);
  const [dir, setDir] = useState(null);
  const [timer, setTimer] = useState(0);
  const [powerPill, setPowerPill] = useState(false);
  const [rotation, setRotation] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyInput);

    return () => document.removeEventListener("keydown", handleKeyInput);
  }, [pos]);

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
    pos,
    setPos,

    speed,
    setSpeed,

    dir,
    setDir,

    timer,
    setTimer,

    powerPill,
    setPowerPill,

    rotation,
    setRotation,

    shouldMove,
    getNextMove,
    makeMove,
    setNewPos,
    handleKeyInput,
  };

  return (
    <PacmanPacmanContext.Provider value={value}>
      {children}
    </PacmanPacmanContext.Provider>
  );
}
export default PacmanPacmanProvider;
