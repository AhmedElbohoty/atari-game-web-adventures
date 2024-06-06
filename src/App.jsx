import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Games from "@pages/Games/Games";
import Pacman from "@pages/Pacman/Pacman";

import { AppContext } from "@services/context";

import "@styles/base.css";

const router = createBrowserRouter([
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/games/pacman",
    element: <Pacman />,
  },
  {
    path: "*",
    element: <Games />,
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
