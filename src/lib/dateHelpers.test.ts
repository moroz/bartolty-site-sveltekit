import { formatDateRange, NDASH } from "./dateHelpers";
import dayjs from "dayjs";

describe(formatDateRange, () => {
  test("it returns a falsey value when start date is falsey", () => {
    const end = dayjs().add(3, "day");
    const actual = formatDateRange("", end);
    expect(actual).toBeFalsy();
  });

  test("it returns a falsey value when end date is falsey", () => {
    const start = dayjs().add(3, "day");
    const actual = formatDateRange(start, "");
    expect(actual).toBeFalsy();
  });

  test("formats dates + year at the end when no hours are included and both dates are in same year", () => {
    const start = "2022-06-16";
    const end = "2022-07-01";
    const actual = formatDateRange(start, end);
    expect(actual).toEqual(`16 czerwca${NDASH}1 lipca 2022`);
  });

  test("formats days + month + year when no hours are included and both dates are in same month", () => {
    const start = "2022-06-16";
    const end = "2022-06-19";
    const actual = formatDateRange(start, end);
    expect(actual).toEqual(`16${NDASH}19 czerwca 2022`);
  });

  test("formats full dates when no hours are included and dates are different years", () => {
    const start = "2021-12-28";
    const end = "2022-01-01";
    const actual = formatDateRange(start, end);
    expect(actual).toEqual(`28 grudnia 2021${NDASH}1 stycznia 2022`);
  });

  test("formats full dates with hours when both dates include hours", () => {
    const start = "2022-06-16 14:00";
    const end = "2022-06-19 15:00";
    const actual = formatDateRange(start, end);
    expect(actual).toEqual(
      `16 czerwca 2022 14:00${NDASH}19 czerwca 2022 15:00`
    );
  });
});
