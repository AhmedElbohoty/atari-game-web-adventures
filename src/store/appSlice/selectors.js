export const selectGrid = ({ app }) => app.grid;

export const selectGameWin = ({ app }) => app.gameWin;

export const selectDotCount = ({ app }) => app.dotCount;

export const selectPacPos = ({ app }) => app.pacman.pos;
export const selectPacDir = ({ app }) => app.pacman.dir;
export const selectPacPowerPill = ({ app }) => app.pacman.powerPill;

export const selectGhosts = ({ app }) => app.ghosts;

export const selectScore = ({ app }) => app.score;

export const selectIsPosHasClass = ({ app }, pos, cls) =>
  app.grid[pos].classList.includes(cls);
