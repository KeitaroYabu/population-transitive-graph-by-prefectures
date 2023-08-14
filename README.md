# population-transitive-graph-by-prefectures

## 命名規則

| 名称            | 命名規則      |
| --------------- | ------------- |
| components / 型 | PascalCase    |
| ブランチ        | kebab-case    |
| 環境変数        | CONSTANT_CASE |
| その他          | camelCase     |

## app dir構成

| ディレクトリ名 | 責務                  |
| -------------- | --------------------- |
| api            | データフェッチ        |
| components     | UI                    |
| contexts       | 状態管理              |
| hooks          | ロジック (テスト必須) |
| config.ts      | 環境変数の整形        |
| page.ts        | UI / データの注入     |

## components構成

| ディレクトリ名 | 粒度 | ドメイン依存 | データの受け渡し | 推奨component |
| -------------- | ---- | ------------ | ---------------- | ------------- |
| presentational | 小   | なし         | props            | server        |
| container      | 大   | あり         | props, 状態管理  | client        |
