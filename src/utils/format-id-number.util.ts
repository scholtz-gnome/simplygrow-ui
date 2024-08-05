import formatStringByPattern from 'format-string-by-pattern';

export const formatIDNumber = (idNumber: string): string => {
  return formatStringByPattern('999999 9999 999', idNumber);
};
