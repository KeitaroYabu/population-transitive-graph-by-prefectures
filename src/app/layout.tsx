import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import { PrefecturesContextProvider } from "./contexts/prefecturesContext";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "都道府県別総人口推移グラフ",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <PrefecturesContextProvider>
          {props.children}
        </PrefecturesContextProvider>
      </body>
    </html>
  );
}
