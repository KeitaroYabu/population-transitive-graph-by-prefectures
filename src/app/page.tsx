import { getPrefectures } from "./api/prefectures";
import { Checkbox } from "./components/presentational/Checkbox";
import { RadioButton } from "./components/presentational/RadioButton";

export default async function Home() {
  const prefectures = await getPrefectures();
  return (
    <main>
      <h1 className="text-3xl">都道府県別総人口推移グラフ</h1>
      <div className="flex flex-row text-center">
        <Checkbox isChecked={true} />
        {prefectures.result[0].prefName}
      </div>
      <Checkbox isChecked={false} />
      <div className="flex flex-row text-center">
        <RadioButton isChecked />
        総人口
      </div>
      <RadioButton isChecked={false} />
    </main>
  );
}
