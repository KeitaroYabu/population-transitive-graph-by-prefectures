"use client";

import { Prefecture } from "../../api/prefectures";
import { usePrefectures } from "../../hooks/usePrefectures";
import { Checkbox } from "../presentational/Checkbox";

export const PrefectureCheckbox = ({ prefCode, prefName }: Prefecture) => {
  const { isSelectedPrefectures, updateSelectedPrefectures } =
    usePrefectures(prefCode);
  return (
    <div className="flex w-24 flex-row text-center">
      <Checkbox
        isChecked={isSelectedPrefectures}
        size={20}
        onClick={updateSelectedPrefectures}
      />
      {prefName}
    </div>
  );
};
