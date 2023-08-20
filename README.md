# prefecture-populations-graph

## 本番環境

https://prefecture-populations-graph.vercel.app/

## 命名規則

| 名称            | 命名規則      |
| --------------- | ------------- |
| components / 型 | PascalCase    |
| ブランチ        | kebab-case    |
| 環境変数        | CONSTANT_CASE |
| その他          | camelCase     |

## ディレクトリ構成

### app

| ディレクトリ名 | 責務                       |
| -------------- | -------------------------- |
| api            | データフェッチ             |
| components     | UI                         |
| contexts       | 状態管理                   |
| hooks          | ロジック (テスト必須)      |
| utils          | config.ts : 環境変数の整形 |
|                | theme.ts : theme config    |
| page.tsx       | UI / データの注入          |
| layout.tsx     | 共通スタイル               |
| globals.css    | Tailwind CSS の適用        |

### components

| ディレクトリ名 | ドメイン依存 | データの受け渡し | 推奨component |
| -------------- | ------------ | ---------------- | ------------- |
| presentational | なし         | props            | server        |
| container      | あり         | props / 状態管理 | client        |

## チュートリアル

### 事前準備

どちらかの環境を用意

- Docker + VS Code (拡張機能 : Remote Development)

- Node.js (version : `.nvmrc`)

### 依存パッケージのインストール

```
npm install
```

### .env.localの作成

セキュリティのため、ここには記載しない。

### 開発モードで起動

```
npm run dev
```

### テストの実行

```
npm run test
```
