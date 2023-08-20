if (!process.env.NEXT_PUBLIC_RESAS_API_KEY) {
  throw new Error("環境変数NEXT_PUBLIC_RESAS_API_KEYが設定されていません。");
}

if (!process.env.NEXT_PUBLIC_RESAS_HOST_DOMAIN) {
  throw new Error(
    "環境変数NEXT_PUBLIC_RESAS_HOST_DOMAINが設定されていません。",
  );
}

if (!process.env.NEXT_PUBLIC_RESAS_PREFECTURES_PATH) {
  throw new Error(
    "環境変数NEXT_PUBLIC_RESAS_PREFECTURES_PATHが設定されていません。",
  );
}

if (!process.env.NEXT_PUBLIC_RESAS_POPULATION_PATH) {
  throw new Error(
    "環境変数NEXT_PUBLIC_RESAS_POPULATION_PATHが設定されていません。",
  );
}

export const appConfig = {
  resas: {
    apiKey: process.env.NEXT_PUBLIC_RESAS_API_KEY,
    hostDomain: process.env.NEXT_PUBLIC_RESAS_HOST_DOMAIN,
    prefecturesPath: process.env.NEXT_PUBLIC_RESAS_PREFECTURES_PATH,
    populationPath: process.env.NEXT_PUBLIC_RESAS_POPULATION_PATH,
  },
};
