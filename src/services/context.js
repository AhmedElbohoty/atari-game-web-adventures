import { createContext, useContext } from "react";

export const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContext Provider");
  }

  return context;
}
