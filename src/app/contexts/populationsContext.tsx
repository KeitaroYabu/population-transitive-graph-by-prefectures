"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { PopulationSection } from "./populationSectionContext";

type Populations = {
  prefCode: number;
  data: Record<PopulationSection, number[] | undefined>;
};

const PopulationsContext = createContext<
  [Array<Populations>, Dispatch<SetStateAction<Array<Populations>>>] | undefined
>(undefined);

export const PopulationsContextProvider = (props: { children: ReactNode }) => {
  const [populations, setPopulations] = useState<Array<Populations>>([]);
  return (
    <PopulationsContext.Provider value={[populations, setPopulations]}>
      {props.children}
    </PopulationsContext.Provider>
  );
};

export const usePopulationsContext = () => {
  const context = useContext(PopulationsContext);
  if (context === undefined) {
    throw new Error("PopulationsContextが見つかりません。");
  }
  return context;
};
