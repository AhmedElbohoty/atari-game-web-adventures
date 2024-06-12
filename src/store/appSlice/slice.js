import { createSlice } from "@reduxjs/toolkit";

import initialState from "store/appSlice/initialState";
import reducers from "store/appSlice/reducers";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const {
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
  addGhost,
} = appSlice.actions;

export default appSlice.reducer;
