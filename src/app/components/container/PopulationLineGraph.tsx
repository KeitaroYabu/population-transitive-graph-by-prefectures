"use client";

import {
  CategoryScale,
  Chart,
  ChartData,
  Colors,
  Legend,
  LineElement,
  LinearScale,
  Point,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Prefecture } from "../../api/prefectures";
import { usePopulationSectionContext } from "../../contexts/populationSectionContext";
import { usePopulationsContext } from "../../contexts/populationsContext";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Colors,
);

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
    <Line
      data={data}
      options={{ plugins: { colors: { forceOverride: true } } }}
    />
  );
};
