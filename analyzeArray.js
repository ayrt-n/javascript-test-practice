function arrayMin(arr) {
  if (arr.length === 0) { return undefined; }

  const initialValue = arr[0];
  const min = arr.reduce((prevVal, currVal) => {
    return prevVal < currVal ? prevVal : currVal;
  }, initialValue)

  return min;
}

function arrayMax(arr) {
  if (arr.length === 0) { return undefined; }

  const initialValue = arr[0];
  const max = arr.reduce((prevVal, currVal) => {
    return prevVal > currVal ? prevVal : currVal;
  }, initialValue)

  return max;
}

function arrayAverage(arr) {
  if (arr.length === 0) { return undefined; }

  const sum = arr.reduce((prevVal, currVal) => prevVal + currVal, 0);
  return sum / arr.length;
}

function analyzeArray(arr) {
  const average = arrayAverage(arr);
  const min = arrayMin(arr);
  const max = arrayMax(arr);
  const length = arr.length;

  return { average, max, min, length }
};

export default analyzeArray;
