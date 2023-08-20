import { PopulationResponse, getPopulation } from "../api/population";
import {
  PopulationSection,
  populationLabel,
} from "../contexts/populationSectionContext";
import { usePopulationsContext } from "../contexts/populationsContext";

const formatPopulationData = (
  data: PopulationResponse,
  section: PopulationSection,
) => {
  return data.result.data
    .find(({ label }) => label === populationLabel[section])
    ?.data.map(({ value }) => value);
};

export const usePopulations = (prefCode: number) => {
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
          total: formatPopulationData(newPopulation, "total"),
          young: formatPopulationData(newPopulation, "young"),
          working: formatPopulationData(newPopulation, "working"),
          old: formatPopulationData(newPopulation, "old"),
        },
      },
    ]);
  };

  return {
    isSelectedPrefectures,
    updatePopulations,
  };
};
