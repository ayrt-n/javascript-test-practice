import caeserCipher from './caesarCipher';

test('shifts string forward by the given factor', () => {
  expect(caeserCipher('abc', 1)).toBe('bcd');
});

test('shifts string backwards by the given factor', () => {
  expect(caeserCipher('bcd', -1)).toBe('abc');
});

test('shifts string forward, respecting upper/lowercase', () => {
  expect(caeserCipher('AbCd', 1)).toBe('BcDe');
});

test('shifts string forward and wraps from z to a', () => {
  expect(caeserCipher('Zz', 2)).toBe('Bb');
});

test('shifts string backwards and wraps from a to z', () => {
  expect(caeserCipher('Aa', -2)).toBe('Yy');
});

test('does not shift non-alphabetical charatcers', () => {
  expect(caeserCipher('123$%^', 12)).toBe('123$%^');
});