import { AnyDate } from "@interfaces";
import dayjs from "dayjs";
import pl from "dayjs/locale/pl";
dayjs.locale(pl);
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const NDASH = "–";

export const formatDate = (date: AnyDate) => {
  return dayjs(date).format();
};

export const isValidDate = (date: AnyDate | null | undefined) => {
  return date !== null && date !== undefined && dayjs(date).isValid();
};

export const normalizeDate = (date: AnyDate) => {
  if (!isValidDate(date)) return null;
  return dayjs(date).toISOString();
};

export const compareDates = (a: AnyDate, b: AnyDate) => {
  return dayjs(b).unix() - dayjs(a).unix();
};

export const formatDateRange = (rawStart: AnyDate, rawEnd: AnyDate) => {
  if (!rawStart || !rawEnd) return "";
  const start = dayjs(rawStart);
  const end = dayjs(rawEnd);

  const isSameYear = start.year() === end.year();
  const isSameMonth = start.month() === end.month();

  const hoursIncluded = start.hour() && end.hour();

  if (hoursIncluded) {
    return (
      start.format("D MMMM YYYY HH:mm") +
      NDASH +
      end.format("D MMMM YYYY HH:mm")
    );
  }

  if (isSameMonth) {
    return start.format("D") + NDASH + end.format("D MMMM YYYY");
  }

  if (isSameYear) {
    return start.format("D MMMM") + NDASH + end.format("D MMMM YYYY");
  }

  return start.format("D MMMM YYYY") + NDASH + end.format("D MMMM YYYY");
};
