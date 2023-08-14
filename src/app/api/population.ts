import { appConfig } from "../config";

type PopulationResponse = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
        rate?: number;
      }[];
    }[];
  };
};

export const getPopulation: (
  prefCode: number,
) => Promise<PopulationResponse> = async (prefCode) => {
  const res = await fetch(
    new URL(appConfig.resas.populationPath, appConfig.resas.hostDomain) +
      "?" +
      new URLSearchParams({ prefCode: String(prefCode), cityCode: "-" }),
    {
      headers: new Headers({
        "X-API-KEY": appConfig.resas.apiKey,
        "Content-Type": "application/json;charset=UTF-8",
      }),
    },
  );
  if (!res.ok) {
    throw new Error("人口構成を取得できませんでした。");
  }
  const data = res.json();
  return data;
};
