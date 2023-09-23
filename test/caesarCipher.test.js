import caesarCipher from '../code/caesarCipher.js';

test('Caesar cipher function 1', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('Caesar cipher function 2', () => {
  expect(caesarCipher('This is string.', 1)).toBe('Uijt!jt!tusjoh/');
});