# 開発記録

コード提出に稼働時間や参考資料の提出を求められていたので、ここに記載する。

## 稼働時間

8/11 8:05 技術選定/環境構築
8/12 13:15-

## 参考資料

- RESAS : https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
- chart FW
  - npm trends : https://npmtrends.com/chart.js-vs-d3-vs-recharts
  - chart.js : https://www.chartjs.org/docs/latest/getting-started/integration.html
  - d3 : https://d3js.org/
  - rechrts : https://recharts.org/en-US/api/AreaChart
  - FW比較記事 : https://zenn.dev/leftletter/articles/cdf3d30b74718c#recharts
- docker
  - docker image 記事 : https://zenn.dev/jrsyo/articles/e42de409e62f5d#%E9%81%B8%E6%8A%9E%E8%82%A2-3.-ubuntu-%2B-slim-%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8-(%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9-%E2%97%8E)
  - docker hub node : https://hub.docker.com/_/node
  - best practice 記事 : https://zenn.dev/kenghaya/articles/36cd09b9f47ba6#6.-multi-stage-builds%E3%82%92%E4%BD%BF%E3%81%8A%E3%81%86
- devcontainer
  - vscode docs : https://code.visualstudio.com/docs/devcontainers/containers
  - devcontainer.json props : https://containers.dev/implementors/json_reference/
  - 構築記事 : https://manfredmlange.medium.com/creating-a-dev-container-for-typescript-and-vs-code-part-1-e653bb95c27f github : https://github.com/RimuTec/dev-container-typescript/blob/part-1/.devcontainer/docker-compose.yml
- Next.js
  - doc : https://nextjs.org/docs/pages/api-reference/create-next-app
  - github : https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/development/Dockerfile
- Jest
  - Next.js docs : https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library
  - Jest導入記事 : https://nishinatoshiharu.com/install-jest-in-next/
  - eslint-plugin-jest導入記事 : https://zenn.dev/kakkoyakakko/articles/5f9d78a02ff8fb
- github actions
  - 記事 : https://qiita.com/shun198/items/14cdba2d8e58ab96cf95#actionscheckoutv3%E3%81%A3%E3%81%A6%E4%BD%95%E3%81%97%E3%81%A6%E3%82%8B%E3%81%AE
  - github docs : https://docs.github.com/ja/actions/using-workflows/events-that-trigger-workflows#available-events
  - checkout v3 : https://github.com/marketplace/actions/checkout
  - setup-node : https://github.com/marketplace/actions/setup-node-js-environment
