"use client";

import { colors } from "src/app/utils/theme";
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
        iconProps={{ size: 22, color: colors.blue }}
        onClick={() => setSelectedSection(props.section)}
      />
      {populationLabel[props.section]}
    </div>
  );
};
