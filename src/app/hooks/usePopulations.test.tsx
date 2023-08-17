import { act, renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { PopulationsContextProvider } from "../contexts/populationsContext";
import { usePrefectures } from "./usePopulations";

const wrapper = (props: { children: ReactNode }) => {
  return (
    <PopulationsContextProvider>{props.children}</PopulationsContextProvider>
  );
};

const mockData = {
  message: null,
  result: {
    boundaryYear: 2020,
    data: [
      {
        label: "総人口",
        data: [
          {
            year: 1980,
            value: 12817,
          },
        ],
      },
    ],
  },
};

const mock = () =>
  new Promise((resolve) => {
    resolve({
      ok: true,
      status: 200,
      json: async () => mockData,
    });
  });

afterAll(() => {
  jest.clearAllMocks();
});

// prefCodeが1の場合
const usePrefecturesTest = () => {
  const { isSelectedPrefectures, updatePopulations } = usePrefectures(1);
  return { isSelectedPrefectures, updatePopulations };
};

test("isSelectedPrefecturesの初期値はfalseである。", () => {
  const { result } = renderHook(() => usePrefecturesTest(), { wrapper });
  expect(result.current.isSelectedPrefectures).toBe(false);
});

test("updatePopulationsを1回実行した場合、isSelectedPrefecturesはtrueである。", async () => {
  global.fetch = jest.fn().mockImplementation(mock);
  const { result } = renderHook(() => usePrefecturesTest(), { wrapper });
  const spy = jest.spyOn(result.current, "updatePopulations");
  await act(result.current.updatePopulations);
  await waitFor(() => expect(spy).toHaveBeenCalled());
  expect(result.current.isSelectedPrefectures).toBe(true);
});

test("updatePopulationsを2回実行した場合、isSelectedPrefecturesはfalseである。", async () => {
  global.fetch = jest.fn().mockImplementation(mock);
  const { result } = renderHook(() => usePrefecturesTest(), { wrapper });
  const spy = jest.spyOn(result.current, "updatePopulations");
  await act(result.current.updatePopulations);
  await act(result.current.updatePopulations);
  await waitFor(() => expect(spy).toHaveBeenCalled());
  expect(result.current.isSelectedPrefectures).toBe(false);
});
