import { CLASS_LIST, DIRECTIONS, LEVEL, OBJECT_TYPE } from "services/constants";
const { BLINKY, PINKY, INKY, CLYDE } = OBJECT_TYPE;

let dotCount = 0;
const grid = LEVEL.map((square, index) => {
  if (CLASS_LIST[square] === OBJECT_TYPE.DOT) dotCount++;

  return {
    index,
    square,
    classList: ["sqaure", CLASS_LIST[square]],
  };
});

const initialState = {
  grid,
  dotCount,
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
  ghosts: {
    [BLINKY]: {
      name: BLINKY,
      startPos: 188,
      pos: 188,
      dir: DIRECTIONS.ArrowRight,
      speed: 5,
      timer: 0,
      isScared: false,
      rotation: false,
    },
    [PINKY]: {
      name: PINKY,
      speed: 4,
      startPos: 209,
      pos: 209,
      dir: DIRECTIONS.ArrowRight,
      timer: 0,
      isScared: false,
      rotation: false,
    },
    [INKY]: {
      name: INKY,
      speed: 3,
      startPos: 230,
      pos: 230,
      dir: DIRECTIONS.ArrowRight,
      timer: 0,
      isScared: false,
      rotation: false,
    },
    [CLYDE]: {
      name: CLYDE,
      speed: 2,
      startPos: 251,
      pos: 251,
      dir: DIRECTIONS.ArrowRight,
      timer: 0,
      isScared: false,
      rotation: false,
    },
  },
};

export default initialState;
