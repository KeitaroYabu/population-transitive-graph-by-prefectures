"use client";

import {
  PopulationSection,
  populationLabel,
  usePopulationSectionContext,
} from "../../contexts/populationSectionContext";
import { RadioButton } from "../presentational/RadioButton";

export const PopulationRadioButton = (props: {
  section: PopulationSection;
}) => {
  const [selectedSection, setSelectedSection] = usePopulationSectionContext();
  return (
    <div className="flex flex-row text-center">
      <RadioButton
        isChecked={props.section === selectedSection}
        size={22}
        onClick={() => setSelectedSection(props.section)}
      />
      {populationLabel[props.section]}
    </div>
  );
};
