import analyzeArray from './analyzeArray';

test('takes array of positive integers and returns average, min, max, and length value', () => {
  const array = [1, 8, 3, 4, 2, 6];
  const result = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(analyzeArray(array)).toEqual(result);
});

test('takes array of negative integers and returns average, min, max, and length value', () => {
  const array = [-1, -8, -3, -4, -2, -6];
  const result = {
    average: -4,
    min: -8,
    max: -1,
    length: 6,
  };

  expect(analyzeArray(array)).toEqual(result);
});

test('case where array is empty', () => {
  const array = [];
  const result = {
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  };

  expect(analyzeArray(array)).toEqual(result);
});