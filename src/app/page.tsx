import { getPopulation } from "./api/population";
import { getPrefectures } from "./api/prefectures";
import { PopulationLineGraph } from "./components/container/PopulationLineGraph";
import { PopulationRadioButton } from "./components/container/PopulationRadioButton";
import { PrefectureCheckbox } from "./components/container/PrefectureCheckbox";
import { SectionWrap } from "./components/presentational/SectionWrap";

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
    <main className="flex flex-col items-center gap-4 py-10">
      <div className="flex w-full justify-center">
        <h1 className="w-full max-w-screen-lg text-4xl font-medium leading-snug">
          都道府県別
          <br />
          総人口推移グラフ
        </h1>
      </div>
      <SectionWrap heading="人口区分">
        <div className="flex gap-5">
          <PopulationRadioButton section="total" />
          <PopulationRadioButton section="young" />
          <PopulationRadioButton section="working" />
          <PopulationRadioButton section="old" />
        </div>
      </SectionWrap>
      <SectionWrap heading="都道府県">
        <div className="flex flex-wrap">
          {prefectures.result.map((prefecture) => {
            return (
              <PrefectureCheckbox key={prefecture.prefCode} {...prefecture} />
            );
          })}
        </div>
      </SectionWrap>
      <SectionWrap heading="グラフ">
        <PopulationLineGraph prefectures={prefectures.result} />
      </SectionWrap>
    </main>
  );
}
