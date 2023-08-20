"use client";

import { colors } from "src/app/utils/theme";
import { Prefecture } from "../../api/prefectures";
import { usePopulations } from "../../hooks/usePopulations";
import { Checkbox } from "../presentational/Checkbox";

export const PrefectureCheckbox = ({ prefCode, prefName }: Prefecture) => {
  const { isSelectedPrefectures, updatePopulations } = usePopulations(prefCode);
  return (
    <div className="flex w-24 flex-row text-center">
      <Checkbox
        isChecked={isSelectedPrefectures}
        iconProps={{ size: 20, color: colors.red }}
        onClick={updatePopulations}
      />
      {prefName}
    </div>
  );
};
