# 開発記録

稼働時間や参考資料等はここに記載する。

## 試験内容

https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d
https://note.yumemi.co.jp/n/ned7429b59556

## 稼働時間

総稼働時間 : 51:50

| 日付 | 稼働時間 | 作業内容                                       |
| ---- | -------- | ---------------------------------------------- |
| 8/11 | 8:05     | 技術選定, 環境構築                             |
| 8/12 | 3:30     | Checkbox                                       |
| 8/13 | 6:35     | ガイドライン, RadioButton, api/prefectures     |
| 8/14 | 6:10     | 都道府県選択UI, api/population, 人口区分選択UI |
| 8/15 | 5:00     | react-chartjs-2の導入                          |
| 8/16 | 4:00     | contextsの修正                                 |
| 8/17 | 1:55     | テストの修正                                   |
| 8/18 | 2:30     | グラフ表示UI                                   |
| 8/19 | 6:50     | デプロイ, UIの修正                             |
| 8/20 | 7:15     | UIの修正, responsive design, docsの整理        |

## 技術選定

- Next.js : 仕様的にWebサイトの側面が強いのでSEOを意識。
- Tailwind CSS : CSSベースなのでApp Routerでも動作する。create-next-appのおかげで導入が簡単。
- Jest / React Testing Library : なんとなく。記事でよく目にしていたから。
- Docker : ローカルにNode環境がないから。
  - devcontainer : 環境構築が簡単だから。
- chart.js / react-chartjs-2 : recharts内部のinheritsでErrorが発生したため、代替として採用。d3は多機能すぎたので却下した。react-chartjs-2の更新が止まっていることが懸念点。
- vercel : Next.jsと親和性が高いため。

## 振り返り

- docker / devcontainer
  - dockerは初めての試みだった。
  - docker環境の構築に時間をかけてられないので、動くことを優先した。
  - docker imageはalpineが仕様が一部異なるようなので、slimを採用。
  - devcontainerを採用したことにより、エディターがVS Codeに制限される状態になってしまった。
  - docker環境でgitのアカウント認証が通らなかったので、ローカルに環境変数入れてゴリ押ししてしまった。
- App
  - client componentsを小さくするように努めた。
  - 状態管理がclient componentsに限られる一方で状態管理する項目が少ないので、useContextを採用した。
  - Tailwind CSSからthemeを取り出す方法がわからなかったので、utils/theme.tsで対応。
  - rechartsは修正によるタイムロスを吟味して採用取り消し。原因は究明済み。
  - 環境変数の扱いには注意した。
- Dir
  - ディレクトリごとの責務はきちんと分けられているはず。
  - ディレクトリ構成については検討の余地がありそう。今回はpageが少ないため問題ないと判断。
    - container componentsはdomainに依存するため、segment配下に置く。
    - componentsをUI/client/serverに分け、UIはdomain非依存のためapp配下、client/serverはdomain依存のためsegment配下。
    - hooksもdomain依存のものはsegment配下に置く。
- 開発体制
  - テスト戦略 : 静的テストは徹底したが、複雑な関数が少ないため単体テスト以上はあまりしていない。
  - commit messageに一貫性がない。
  - 機能、UI/UX、コードの最適化の順で優先順位を立てた。
  - デプロイ後は時間のかかりそうなタスクはIssueを作って後回しにした。

## 参考資料

- RESAS : https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
- chart FW
  - npm trends : https://npmtrends.com/chart.js-vs-d3-vs-recharts
  - chart.js : https://www.chartjs.org/docs/latest/getting-started/integration.html
  - react-chartjs-2 : https://react-chartjs-2.js.org/
    - sandbox : https://codesandbox.io/s/github/reactchartjs/react-chartjs-2/tree/master/sandboxes/line/default?from-embed
  - d3 : https://d3js.org/
  - recharts : https://recharts.org/en-US/api/AreaChart
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
  - docs : https://nextjs.org/docs/pages/api-reference/create-next-app
  - github : https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/development/Dockerfile
  - Data Fetching YouTube : https://www.youtube.com/watch?v=-Sj05H2AuW8
  - MDN Fetch API : https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
  - useContext : https://reffect.co.jp/react/next-js-13/#context
- Jest
  - docs : https://jestjs.io/ja/docs/expect
  - Next.js docs : https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library
  - サバイバルTypeScript : https://typescriptbook.jp/tutorials/jest
  - 導入記事 : https://nishinatoshiharu.com/install-jest-in-next/
  - eslint-plugin-jest導入記事 : https://zenn.dev/kakkoyakakko/articles/5f9d78a02ff8fb
  - 解説記事 : https://zenn.dev/tkdn/books/react-testing-patterns/viewer/about-this-book
- React Testing Library : https://testing-library.com/docs/dom-testing-library/api-async/#waitfor
- github actions
  - 解説記事 : https://qiita.com/shun198/items/14cdba2d8e58ab96cf95#actionscheckoutv3%E3%81%A3%E3%81%A6%E4%BD%95%E3%81%97%E3%81%A6%E3%82%8B%E3%81%AE
  - github docs : https://docs.github.com/ja/actions/using-workflows/events-that-trigger-workflows#available-events
  - checkout v3 : https://github.com/marketplace/actions/checkout
  - setup-node : https://github.com/marketplace/actions/setup-node-js-environment
- react-icons : https://react-icons.github.io/react-icons
- ディレクトリ構成
  - Container/Presentational記事 : https://zenn.dev/buyselltech/articles/9460c75b7cd8d1
  - Atomic Design記事 : https://tech.leverages.jp/entry/2022/08/31/160743
  - molecule記事 : https://www.mitsuru-takahashi.net/blog/atomic-molecule/
- 環境変数
  - best practice記事 : https://zenn.dev/dove/articles/5fd7926e7da949
- tailwindcss : https://tailwindcss.com/docs/theme
