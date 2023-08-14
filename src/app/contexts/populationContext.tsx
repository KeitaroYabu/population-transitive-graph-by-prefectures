"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type PopulationSection = "total" | "young" | "working" | "old";

const PopulationContext = createContext<
  [PopulationSection, Dispatch<SetStateAction<PopulationSection>>] | undefined
>(undefined);

export const PopulationContextProvider = (props: { children: ReactNode }) => {
  const [population, setPopulation] = useState<PopulationSection>("total");
  return (
    <PopulationContext.Provider value={[population, setPopulation]}>
      {props.children}
    </PopulationContext.Provider>
  );
};

export const usePopulationContext = () => {
  const context = useContext(PopulationContext);
  if (context === undefined) {
    throw new Error("PopulationContextが見つかりません。");
  }
  return context;
};
