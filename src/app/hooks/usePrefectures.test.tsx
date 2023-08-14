import { act, renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { PrefecturesContextProvider } from "../contexts/prefecturesContext";
import { usePrefectures } from "./usePrefectures";

const wrapper = (props: { children: ReactNode }) => {
  return (
    <PrefecturesContextProvider>{props.children}</PrefecturesContextProvider>
  );
};

// prefCodeが1の場合
const usePrefecturesTest = () => {
  const { isSelectedPrefectures, updateSelectedPrefectures } =
    usePrefectures(1);
  return { isSelectedPrefectures, updateSelectedPrefectures };
};

test("isSelectedPrefecturesの初期値はfalseである。", () => {
  const { result } = renderHook(() => usePrefecturesTest(), { wrapper });
  expect(result.current.isSelectedPrefectures).toBe(false);
});

test("updateSelectedPrefecturesを1回実行した場合、isSelectedPrefecturesはtrueである。", () => {
  const { result } = renderHook(() => usePrefecturesTest(), { wrapper });
  act(result.current.updateSelectedPrefectures);
  expect(result.current.isSelectedPrefectures).toBe(true);
});

test("updateSelectedPrefecturesを2回実行した場合、isSelectedPrefecturesはfalseである。", () => {
  const { result } = renderHook(() => usePrefecturesTest(), { wrapper });
  act(result.current.updateSelectedPrefectures);
  act(result.current.updateSelectedPrefectures);
  expect(result.current.isSelectedPrefectures).toBe(false);
});
