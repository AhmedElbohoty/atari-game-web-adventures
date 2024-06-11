import { current } from "@reduxjs/toolkit";
import { OBJECT_TYPE } from "services/constants";

function updateGrid(state, action) {
  state.grid = action.payload;
}

function updateDotCount(state, action) {
  state.dotCount = action.payload;
}

function updateScore(state, action) {
  state.score = action.payload;
}

function updateGameWin(state, action) {
  state.gameWin = action.payload;
}

function updatePowerPillActive(state, action) {
  state.powerPillActive = action.payload;
}

function updatePacPos(state, action) {
  state.pacman.pos = action.payload;
}

function updatePacDir(state, action) {
  state.pacman.dir = action.payload;
}

function updatePacSpeed(state, action) {
  state.pacman.speed = action.payload;
}

function addObject(state, action) {
  const { grid } = state;
  const { pos, classes = [] } = action.payload;

  const newGrid = [...grid];
  classes.forEach((cls) => {
    newGrid[pos].classList.push(cls);
  });

  state.grid = newGrid;
}

function removeObject(state, action) {
  const { grid } = state;
  const { pos, classes = [] } = action.payload;

  const newGrid = [...grid];
  newGrid[pos].classList = newGrid[pos].classList.filter((cls) =>
    classes.includes(cls)
  );

  state.grid = newGrid;
}

function shouldPacmanMove(state) {
  const pacman = state.pacman;

  if (!pacman.dir) return false;

  if (pacman.timer === pacman.speed) {
    pacman.timer = 0;
    return true;
  }

  pacman.timer++;
}

function movePacman(state) {
  const shouldMove = shouldPacmanMove(state);
  if (!shouldMove) return;

  const { grid, pacman } = state;
  const { pos, dir } = pacman;

  let nextMovePos = pos + dir.movement;

  if (
    grid[nextMovePos].classList.includes(OBJECT_TYPE.WALL) ||
    grid[nextMovePos].classList.includes(OBJECT_TYPE.GHOSTLAIR)
  ) {
    nextMovePos = pos;
  }

  state.pacman.pos = nextMovePos;

  const newGrid = [...grid];
  newGrid[pos].classList = newGrid[pos].classList.filter(
    (cls) => cls !== OBJECT_TYPE.PACMAN
  );
  newGrid[nextMovePos].classList.push(OBJECT_TYPE.PACMAN);

  state.grid = newGrid;
}

const reducers = {
  updateGrid,
  updateDotCount,
  addObject,
  removeObject,
  shouldPacmanMove,
  updatePacPos,
  updatePacDir,
  updateGameWin,
  updatePowerPillActive,
  updateScore,
  updatePacSpeed,
  movePacman,
};

export default reducers;
