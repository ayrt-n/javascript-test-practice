import { capitalize, reverseString } from './string';

test('capitalizes the first letter of a string', () => {
  const string = 'hello world';
  expect(capitalize(string)).toBe('Hello world');
});

test('reverses a string', () => {
  const string = "Hello world!";
  expect(reverseString(string)).toBe('!dlrow olleH');
});