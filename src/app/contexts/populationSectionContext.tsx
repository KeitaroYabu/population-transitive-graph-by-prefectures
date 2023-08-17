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

export const populationLabel: Record<PopulationSection, string> = {
  total: "総人口",
  young: "年少人口",
  working: "生産年齢人口",
  old: "老年人口",
};

const PopulationSectionContext = createContext<
  [PopulationSection, Dispatch<SetStateAction<PopulationSection>>] | undefined
>(undefined);

export const PopulationSectionContextProvider = (props: {
  children: ReactNode;
}) => {
  const [populationSection, setPopulationSection] =
    useState<PopulationSection>("total");
  return (
    <PopulationSectionContext.Provider
      value={[populationSection, setPopulationSection]}
    >
      {props.children}
    </PopulationSectionContext.Provider>
  );
};

export const usePopulationSectionContext = () => {
  const context = useContext(PopulationSectionContext);
  if (context === undefined) {
    throw new Error("PopulationSectionContextが見つかりません。");
  }
  return context;
};
