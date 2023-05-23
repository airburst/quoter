import { format } from "date-fns";
import addDays from "date-fns/addDays";

const ISO_SHORT_DATE_FORMAT = "yyyy-MM-dd";

const formatDate = (date?: Date): string =>
  format(date || new Date(), ISO_SHORT_DATE_FORMAT);

export const getToday = (): string => formatDate();

export const getTomorrow = (): string => formatDate(addDays(new Date(), 1));
