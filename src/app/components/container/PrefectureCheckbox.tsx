"use client";

import { Prefecture } from "../../api/prefectures";
import { usePopulations } from "../../hooks/usePopulations";
import { Checkbox } from "../presentational/Checkbox";

export const PrefectureCheckbox = ({ prefCode, prefName }: Prefecture) => {
  const { isSelectedPrefectures, updatePopulations } = usePopulations(prefCode);
  return (
    <div className="flex w-24 flex-row text-center">
      <Checkbox
        isChecked={isSelectedPrefectures}
        size={20}
        onClick={updatePopulations}
      />
      {prefName}
    </div>
  );
};
