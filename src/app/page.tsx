import { getPrefectures } from "./api/prefectures";
import { PrefectureCheckbox } from "./components/container/PrefectureCheckbox";
import { RadioButton } from "./components/presentational/RadioButton";

export default async function Home() {
  const prefectures = await getPrefectures();
  return (
    <main>
      <h1 className="text-3xl">都道府県別総人口推移グラフ</h1>
      <div className="flex flex-row flex-wrap">
        {prefectures.result.map((prefecture) => {
          return (
            <PrefectureCheckbox key={prefecture.prefCode} {...prefecture} />
          );
        })}
      </div>
      <div className="flex flex-row text-center">
        <RadioButton isChecked />
        総人口
      </div>
      <RadioButton isChecked={false} />
    </main>
  );
}
