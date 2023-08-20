import { getPopulation } from "./api/population";
import { getPrefectures } from "./api/prefectures";
import { PopulationLineGraph } from "./components/container/PopulationLineGraph";
import { PopulationRadioButton } from "./components/container/PopulationRadioButton";
import { PrefectureCheckbox } from "./components/container/PrefectureCheckbox";
import { ResponsiveWrap } from "./components/presentational/ResponsiveWrap";

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
    <main className="flex flex-col gap-4 py-10">
      <ResponsiveWrap>
        <h1 className="text-4xl font-medium leading-snug">
          都道府県別
          <br />
          総人口推移グラフ
        </h1>
      </ResponsiveWrap>
      <ResponsiveWrap>
        <h2 className="text-lg">人口区分</h2>
        <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:flex">
          <PopulationRadioButton section="total" />
          <PopulationRadioButton section="young" />
          <PopulationRadioButton section="working" />
          <PopulationRadioButton section="old" />
        </div>
      </ResponsiveWrap>
      <ResponsiveWrap>
        <h2 className="text-lg">都道府県</h2>
        <div className="flex flex-wrap">
          {prefectures.result.map((prefecture) => {
            return (
              <PrefectureCheckbox key={prefecture.prefCode} {...prefecture} />
            );
          })}
        </div>
      </ResponsiveWrap>
      <ResponsiveWrap>
        <h2 className="text-lg">グラフ</h2>
      </ResponsiveWrap>
      <div className="w-full">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-1">
          <PopulationLineGraph prefectures={prefectures.result} />
        </div>
      </div>
    </main>
  );
}
