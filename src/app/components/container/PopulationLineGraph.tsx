"use client";

import {
  CategoryScale,
  Chart,
  ChartData,
  Colors,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { colors } from "src/app/utils/theme";
import { Prefecture } from "../../api/prefectures";
import {
  populationLabel,
  usePopulationSectionContext,
} from "../../contexts/populationSectionContext";
import { usePopulationsContext } from "../../contexts/populationsContext";
import { ResponsiveWrap } from "../presentational/ResponsiveWrap";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Colors,
);

Chart.defaults.color = colors.black;

export const PopulationLineGraph = (props: { prefectures: Prefecture[] }) => {
  const [selectedPopulations] = usePopulationsContext();
  const [selectedSection] = usePopulationSectionContext();
  const data: ChartData<"line", number[], unknown> = {
    labels: [
      1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
      2020, 2025, 2030, 2035, 2040, 2045,
    ],
    datasets: selectedPopulations.map((population, index) => {
      return {
        label: props.prefectures.find(
          ({ prefCode }) => population.prefCode === prefCode,
        )?.prefName,
        data: population.data[selectedSection] || [],
        pointRadius: 4,
        pointHoverRadius: 6,
        borderDash: () => {
          if (index < 7) return [];
          if (index < 14) return [3, 3];
          if (index < 21) return [10, 3];
          if (index < 28) return [20, 5];
          if (index < 35) return [20, 5, 3, 5];
          if (index < 42) return [20, 5, 3, 5, 3, 5];
          return [20, 5, 3, 5, 3, 5, 3, 5];
        },
      };
    }),
  };
  return (
    <>
      {selectedPopulations.length === 0 ? (
        <ResponsiveWrap>
          <p>都道府県を選択してください。</p>
        </ResponsiveWrap>
      ) : (
        <Line
          data={data}
          options={{
            interaction: {
              intersect: false,
              mode: "index",
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: ["西暦[年]", "(実績値 : 2020年まで)"],
                  font: { size: 14, lineHeight: "20px" },
                  align: "end",
                },
              },
              y: {
                title: {
                  display: true,
                  text: populationLabel[selectedSection] + "[万人]",
                  font: { size: 14 },
                  align: "end",
                },
                ticks: { callback: (tick) => Number(tick) / 10000 },
              },
            },
            plugins: {
              colors: { forceOverride: true },
              legend: { labels: { font: { size: 14 } } },
              tooltip: {
                callbacks: {
                  title: (items) =>
                    Number(items[0].label) <= 2020
                      ? items[0].label + "年"
                      : items[0].label + "年 (推計値)",
                },
              },
            },
          }}
        />
      )}
    </>
  );
};
