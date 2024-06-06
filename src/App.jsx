import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GamesPage from "pages/GamesPage/GamesPage";
import PacmanPage from "pages/PacmanPage/PacmanPage";

import { AppContext } from "services/context";

import "styles/base.css";

const router = createBrowserRouter([
  {
    path: "/games",
    element: <GamesPage />,
  },
  {
    path: "/games/pacman",
    element: <PacmanPage />,
  },
  {
    path: "*",
    element: <GamesPage />,
  },
]);

function App() {
  const contextValue = {};

  return (
    <AppContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
