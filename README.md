# population-transitive-graph-by-prefectures

## 命名規則

| 名称            | 命名規則      |
| --------------- | ------------- |
| components / 型 | PascalCase    |
| ブランチ        | kebab-case    |
| 環境変数        | CONSTANT_CASE |
| その他          | camelCase     |

## components構成

| ディレクトリ名 | 粒度 | 責務     | ドメイン依存 | データの受け渡し  | 推奨component |
| -------------- | ---- | -------- | ------------ | ----------------- | ------------- |
| presentational | 小   | UI       | なし         | props             | server        |
| container      | 中   | ロジック | あり         | props, useContext | client        |
| server         | 大   | UI       | あり         | props             | server only   |
