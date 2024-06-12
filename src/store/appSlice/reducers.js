import { DIRECTIONS, OBJECT_TYPE } from "services/constants";

function updateGrid(state, action) {
  state.grid = action.payload;
}

function updateDotCount(state, action) {
  state.dotCount = action.payload;
}

function decrementDotCount(state) {
  state.dotCount -= 1;
}

function updateScore(state, action) {
  state.score = action.payload;
}

function addScore(state, action) {
  state.score += action.payload;
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

function updatePacPowerPill(state, action) {
  state.pacman.powerPill = action.payload;
}

function updateGhostsScared(state, action) {
  const { ghosts } = state;
  Object.keys(ghosts).forEach((key) => {
    state.ghosts[key].isScared = action.payload;
  });
}

function resetGhostPos(state, action) {
  const ghostName = action.payload;
  const ghost = state.ghosts[ghostName];
  state.ghosts[ghostName].pos = ghost.startPos;
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
  newGrid[pos].classList = newGrid[pos].classList.filter(
    (cls) => !classes.includes(cls)
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

function shouldGhostMove(state, action) {
  const ghostName = action.payload;
  const { timer, speed } = state.ghosts[ghostName];

  if (timer === speed) {
    state.ghosts[ghostName].timer = 0;
    return true;
  }

  state.ghosts[ghostName].timer += 1;
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

function moveGhosts(state) {
  const { grid, ghosts } = state;
  const newGrid = [...grid];

  Object.keys(ghosts).forEach((key) => {
    const ghost = ghosts[key];

    const shouldMove = shouldGhostMove(state, { payload: ghost.name });
    if (!shouldMove) return;

    const pos = ghosts[ghost.name].pos;

    // get next move
    const { dir: direction, pos: position } = ghost;

    let dir = direction;
    let nextMovePos = position + dir.movement;
    // Create an array from the diretions objects keys
    const keys = Object.keys(DIRECTIONS);

    let count = 0;
    while (
      grid[nextMovePos].classList.includes(OBJECT_TYPE.WALL) ||
      grid[nextMovePos].classList.includes(OBJECT_TYPE.GHOST)
    ) {
      if (count === 3) break;

      // Get a random key from that array
      const key = keys[Math.floor(Math.random() * keys.length)];
      // Set the new direction
      dir = DIRECTIONS[key];
      // Set the next move
      nextMovePos = position + dir.movement;

      count += 1;
    }

    if (count === 3) return;

    ghosts[ghost.name].pos = nextMovePos;

    const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, ghost.name];
    const classesToAdd = [OBJECT_TYPE.GHOST, ghost.name];

    if (ghost.isScared) {
      classesToAdd.push(OBJECT_TYPE.SCARED);
    }

    newGrid[pos].classList = newGrid[pos].classList.filter(
      (cls) => !classesToRemove.includes(cls)
    );
    classesToAdd.forEach((cls) => {
      newGrid[nextMovePos].classList.push(cls);
    });
  });

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
  moveGhosts,
  shouldGhostMove,
  addScore,
  resetGhostPos,
  decrementDotCount,
  updatePacPowerPill,
  updateGhostsScared,
};

export default reducers;
