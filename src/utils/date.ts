import { format, parseISO } from 'date-fns';
import en from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import fp from 'lodash/fp';

export const DEFAULT_ES_DATE_FORMAT = "d 'de' MMMM 'de' yyyy";

export const DEFAULT_EN_DATE_FORMAT = 'MMMM ho, yyyy';

const DEFAULT_FORMAT = navigator?.language?.includes('en')
  ? DEFAULT_EN_DATE_FORMAT
  : DEFAULT_ES_DATE_FORMAT;

export const formatDate = (
  s?: number | string,
  f: string = DEFAULT_FORMAT,
): string => {
  if (fp.isNil(s)) return '-';
  return format(new Date(parseISO(s as string)), f, {
    locale: navigator?.language?.includes('en') ? en : es,
  });
};
