import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "pages/LandingPage/LandingPage";
import GamesPage from "pages/GamesPage/GamesPage";
import PacmanPage from "pages/PacmanPage/PacmanPage";
import AppProvider from "./AppProvider";

import store from "store/store";

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
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  );
}

export default App;
