const initialState = {
  grid: [],
  dotCount: 0,
  score: 0,
  gameWin: false,
  powerPillActive: false,
  powerPillTimer: null,
  pacman: {
    pos: null,
    speed: 0,
    dir: null,
    timer: 0,
    powerPill: false,
    rotation: true,
  },
};

export default initialState;
