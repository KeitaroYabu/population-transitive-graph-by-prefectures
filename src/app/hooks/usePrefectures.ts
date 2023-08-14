import { usePrefecturesContext } from "../contexts/prefecturesContext";

export const usePrefectures = (prefCode: number) => {
  const [selectedPrefectures, setSelectedPrefectures] = usePrefecturesContext();

  const isSelectedPrefectures = selectedPrefectures.some(
    (selectedPref) => selectedPref === prefCode,
  );

  const updateSelectedPrefectures = () => {
    if (isSelectedPrefectures) {
      return setSelectedPrefectures(
        selectedPrefectures.filter((selectedPref) => selectedPref !== prefCode),
      );
    }
    return setSelectedPrefectures([...selectedPrefectures, prefCode]);
  };

  return {
    isSelectedPrefectures,
    updateSelectedPrefectures,
  };
};
