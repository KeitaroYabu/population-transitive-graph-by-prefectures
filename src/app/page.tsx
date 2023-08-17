import { getPopulation } from "./api/population";
import { getPrefectures } from "./api/prefectures";
import { PopulationLineGraph } from "./components/container/PopulationLineGraph";
import { PopulationRadioButton } from "./components/container/PopulationRadioButton";
import { PrefectureCheckbox } from "./components/container/PrefectureCheckbox";

export default async function Home() {
  const prefectures = await getPrefectures();
  const population = await getPopulation(1);
  const data = {
    labels: population.result.data[0].data.map((d) => d.year),
    datasets: [
      {
        label: prefectures.result[0].prefName,
        data: population.result.data[0].data.map((d) => d.value),
      },
    ],
  };
  return (
    <main>
      <h1 className="text-3xl">都道府県別総人口推移グラフ</h1>
      <div className="flex flex-row gap-5">
        <PopulationRadioButton section="total" />
        <PopulationRadioButton section="young" />
        <PopulationRadioButton section="working" />
        <PopulationRadioButton section="old" />
      </div>
      <div className="flex flex-row flex-wrap">
        {prefectures.result.map((prefecture) => {
          return (
            <PrefectureCheckbox key={prefecture.prefCode} {...prefecture} />
          );
        })}
      </div>
      <PopulationLineGraph data={data} />
    </main>
  );
}
