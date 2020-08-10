export const AveragePoint = (value1, value2, value3) => {
  value1 === null ? 0 : value1;
  value2 === null ? 0 : value2;
  value3 === null ? 0 : value3;
  return (value1 + value2 + value3) / 3;
};
