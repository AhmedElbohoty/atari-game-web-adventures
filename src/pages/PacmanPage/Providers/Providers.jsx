import PacmanGameProvider from "pages/PacmanPage/Providers/PacmanGameProvider";
import PacmanPacmanProvider from "pages/PacmanPage/Providers/PacmanPacmanProvider";

function Providers({ children }) {
  return (
    <PacmanGameProvider>
      <PacmanPacmanProvider>{children}</PacmanPacmanProvider>
    </PacmanGameProvider>
  );
}
export default Providers;
