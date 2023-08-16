"use client";

import {
  CategoryScale,
  Chart,
  ChartData,
  LineElement,
  LinearScale,
  Point,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const PopulationLineGraph = (props: {
  data: ChartData<"line", (number | Point | null)[], unknown>;
}) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
  );
  return <Line data={props.data} />;
};
