import {
  add,
  subtract,
  divide,
  multiply,
} from './calculator';

test('adds 2 + 3 and gets 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds 2.15 + 2.16 and gets 4.31', () => {
  expect(add(2.15, 2.16)).toBeCloseTo(4.31)
});

test('subtracts 2 - 3 and gets -1', () => {
  expect(subtract(2, 3)).toBe(-1);
});

test('divides 6 by 3 and gets 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('divides 10 by 3 and gets 3.333333...', () => {
  expect(divide(10, 3)).toBeCloseTo(3.333);
});

test('multiplies 3 by 3 and gets 9', () => {
  expect(multiply(3, 3)).toBe(9);
});

test('multiplies 2.5 by 3 and gets 7.5', () => {
  expect(multiply(2.5, 3)).toBeCloseTo(7.5);
});
