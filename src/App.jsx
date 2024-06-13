import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppPage from "./AppPage";
import AppProvider from "./AppProvider";

import store from "store/store";

import "styles/base.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <AppPage />,
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
