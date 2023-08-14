"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const PrefecturesContext = createContext<
  [Array<number>, Dispatch<SetStateAction<Array<number>>>] | undefined
>(undefined);

export const PrefecturesContextProvider = (props: { children: ReactNode }) => {
  const [prefectures, setPrefectures] = useState<Array<number>>([]);
  return (
    <PrefecturesContext.Provider value={[prefectures, setPrefectures]}>
      {props.children}
    </PrefecturesContext.Provider>
  );
};

export const usePrefecturesContext = () => {
  const context = useContext(PrefecturesContext);
  if (context === undefined) {
    throw new Error("PrefecturesContextが見つかりません。");
  }
  return context;
};
