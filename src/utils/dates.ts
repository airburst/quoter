import { format } from "date-fns";
import addDays from "date-fns/addDays";

const ISO_SHORT_DATE_FORMAT = "yyyy-MM-dd";

const formatDate = (date?: Date): string =>
  format(date || new Date(), ISO_SHORT_DATE_FORMAT);

export const getToday = (): string => formatDate();

const AMOUNT_OF_DAYS_TO_BE_ADDED = 1;

export const getTomorrow = (): string =>
  formatDate(addDays(new Date(), AMOUNT_OF_DAYS_TO_BE_ADDED));

export const getCurrentTime = () => {
  const date = new Date();
  const formattedTime = date.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedTime;
};
