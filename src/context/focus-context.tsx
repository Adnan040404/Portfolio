"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Focus = "data" | "finance";

const FocusContext = createContext<{
  focus: Focus;
  setFocus: (f: Focus) => void;
}>({
  focus: "data",
  setFocus: () => {},
});

export function FocusProvider({ children }: { children: ReactNode }) {
  const [focus, setFocus] = useState<Focus>("data");
  return <FocusContext.Provider value={{ focus, setFocus }}>{children}</FocusContext.Provider>;
}

export function useFocus() {
  return useContext(FocusContext);
}
