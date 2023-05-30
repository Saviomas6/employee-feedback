export const handlePrecision = (val: any, len: number) => {
  const testVal = String(val);
  if (testVal.length >= len) {
    return `${testVal.slice(0, len)}...`;
  }
  return testVal;
};
