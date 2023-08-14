import { getPopulation } from "./api/population";
import { getPrefectures } from "./api/prefectures";
import { PopulationRadioButton } from "./components/container/PopulationRadioButton";
import { PrefectureCheckbox } from "./components/container/PrefectureCheckbox";
import { PopulationSection } from "./contexts/populationContext";

export default async function Home() {
  const prefectures = await getPrefectures();
  const population = await getPopulation(1);
  return (
    <main>
      <h1 className="text-3xl">都道府県別総人口推移グラフ</h1>
      <div className="flex flex-row gap-5">
        <PopulationRadioButton populationSection="total" />
        <PopulationRadioButton populationSection="young" />
        <PopulationRadioButton populationSection="working" />
        <PopulationRadioButton populationSection="old" />
      </div>
      <div className="flex flex-row flex-wrap">
        {prefectures.result.map((prefecture) => {
          return (
            <PrefectureCheckbox key={prefecture.prefCode} {...prefecture} />
          );
        })}
      </div>
      {population.result.boundaryYear}
    </main>
  );
}
