import { PopulationResponse, getPopulation } from "../api/population";
import {
  PopulationSection,
  populationLabel,
} from "../contexts/populationSectionContext";
import { usePopulationsContext } from "../contexts/populationsContext";

const populationDataFormatter = (
  data: PopulationResponse,
  section: PopulationSection,
) => {
  return data.result.data
    .find(({ label }) => label === populationLabel[section])
    ?.data.map(({ value }) => value);
};

export const usePrefectures = (prefCode: number) => {
  const [selectedPopulations, setSelectedPopulations] = usePopulationsContext();

  const isSelectedPrefectures = selectedPopulations.some(
    (population) => population.prefCode === prefCode,
  );

  const updatePopulations = async () => {
    if (isSelectedPrefectures) {
      return setSelectedPopulations(
        selectedPopulations.filter(
          (population) => population.prefCode !== prefCode,
        ),
      );
    }
    const newPopulation = await getPopulation(prefCode);
    return setSelectedPopulations([
      ...selectedPopulations,
      {
        prefCode,
        data: {
          total: populationDataFormatter(newPopulation, "total"),
          young: populationDataFormatter(newPopulation, "young"),
          working: populationDataFormatter(newPopulation, "working"),
          old: populationDataFormatter(newPopulation, "old"),
        },
      },
    ]);
  };

  return {
    isSelectedPrefectures,
    updatePopulations,
  };
};
