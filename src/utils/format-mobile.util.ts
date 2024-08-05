import formatStringByPattern from 'format-string-by-pattern';

export const formatMobile = (cellNumber: string) => {
  return formatStringByPattern('999 999 9999', cellNumber);
};
