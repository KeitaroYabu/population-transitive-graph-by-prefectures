import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import { PopulationSectionContextProvider } from "./contexts/populationSectionContext";
import { PopulationsContextProvider } from "./contexts/populationsContext";
import { colors } from "./utils/theme";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "都道府県別総人口推移グラフ",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className + "bg-white text-black"}>
        <PopulationsContextProvider>
          <PopulationSectionContextProvider>
            {props.children}
          </PopulationSectionContextProvider>
        </PopulationsContextProvider>
      </body>
    </html>
  );
}
