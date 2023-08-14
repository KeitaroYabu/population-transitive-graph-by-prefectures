if (!process.env.RESAS_API_KEY) {
  throw new Error("環境変数RESAS_API_KEYが設定されていません。");
}

if (!process.env.RESAS_HOST_DOMAIN) {
  throw new Error("環境変数RESAS_HOST_DOMAINが設定されていません。");
}

if (!process.env.RESAS_PREFECTURES_PATH) {
  throw new Error("環境変数RESAS_PREFECTURES_PATHが設定されていません。");
}

if (!process.env.RESAS_POPULATION_PATH) {
  throw new Error("環境変数RESAS_POPULATION_PATHが設定されていません。");
}

export const appConfig = {
  resas: {
    apiKey: process.env.RESAS_API_KEY,
    hostDomain: process.env.RESAS_HOST_DOMAIN,
    prefecturesPath: process.env.RESAS_PREFECTURES_PATH,
    populationPath: process.env.RESAS_POPULATION_PATH,
  },
};
