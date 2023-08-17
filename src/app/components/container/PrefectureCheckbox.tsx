"use client";

import { Prefecture } from "../../api/prefectures";
import { usePrefectures } from "../../hooks/usePopulations";
import { Checkbox } from "../presentational/Checkbox";

export const PrefectureCheckbox = ({ prefCode, prefName }: Prefecture) => {
  const { isSelectedPrefectures, updatePopulations } = usePrefectures(prefCode);
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
