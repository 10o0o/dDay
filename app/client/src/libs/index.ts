export const listTypeMap = {
  year: new Array(203).fill(null).map((_, index, array) => {
    if (index === 0) return 0;
    if (index === array.length + 1) return 9999;
    return index + 1899;
  }),
  month: new Array(13).fill(null).map((_, index, array) => {
    if (index === 0) return 0;
    if (index === array.length + 1) return 9999;
    return index;
  }),
  day: [1, 2, 3, 4],
};
