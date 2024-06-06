import { createContext, useContext } from "react";

export const AppContext = createContext();
export const PacmanGameContext = createContext();
export const PacmanPacmanContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContext Provider");
  }

  return context;
}

export function usePacmanGameContext() {
  const context = useContext(PacmanGameContext);

  if (context === undefined) {
    throw new Error(
      "usePacmanGameContext must be used within a PacmanGameContext Provider"
    );
  }

  return context;
}

export function usePacmanPacmanContext() {
  const context = useContext(PacmanPacmanContext);

  if (context === undefined) {
    throw new Error(
      "usePacmanPacmanContext must be used within a PacmanPacmanContext Provider"
    );
  }

  return context;
}
