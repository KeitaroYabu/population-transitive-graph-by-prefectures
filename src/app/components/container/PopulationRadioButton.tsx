"use client";

import {
  PopulationSection,
  usePopulationContext,
} from "../../contexts/populationContext";
import { RadioButton } from "../presentational/RadioButton";

const populationLabel: Record<PopulationSection, string> = {
  total: "総人口",
  young: "年少人口",
  working: "生産年齢人口",
  old: "老年人口",
};

export const PopulationRadioButton = (props: {
  populationSection: PopulationSection;
}) => {
  const [selectedPopulation, setSelectedPopulation] = usePopulationContext();
  return (
    <div className="flex flex-row text-center">
      <RadioButton
        isChecked={props.populationSection === selectedPopulation}
        size={22}
        onClick={() => setSelectedPopulation(props.populationSection)}
      />
      {populationLabel[props.populationSection]}
    </div>
  );
};
