import { appConfig } from "../utils/config";

export type Prefecture = { prefCode: number; prefName: string };

type PrefecturesResponse = {
  message: null;
  result: Prefecture[];
};

export const getPrefectures: () => Promise<PrefecturesResponse> = async () => {
  const res = await fetch(
    new URL(appConfig.resas.prefecturesPath, appConfig.resas.hostDomain),
    {
      headers: new Headers({
        "X-API-KEY": appConfig.resas.apiKey,
        "Content-Type": "application/json;charset=UTF-8",
      }),
    },
  );
  if (!res.ok) {
    throw new Error("都道府県一覧を取得できませんでした。");
  }
  const data = res.json();
  return data;
};
