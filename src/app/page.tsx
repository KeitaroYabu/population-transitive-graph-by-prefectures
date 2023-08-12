import { Checkbox } from "./components/checkbox";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">都道府県別総人口推移グラフ</h1>
      <div className="flex flex-row text-center">
        <Checkbox isChecked={true} />
        北海道
      </div>
      <Checkbox isChecked={false} />
    </main>
  );
}
