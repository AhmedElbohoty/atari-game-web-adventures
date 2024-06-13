import { Route, Routes } from "react-router-dom";

import AppHeader from "components/AppHeader/AppHeader";
import LandingPage from "pages/LandingPage/LandingPage";
import GamesPage from "pages/GamesPage/GamesPage";
import PacmanPage from "pages/PacmanPage/PacmanPage";

function AppPage() {
  return (
    <div>
      <AppHeader />

      <Routes>
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/pacman" element={<PacmanPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default AppPage;
