import capitalize from '../code/capitalize.js';

test('Check if first letter in string is capitalized.', () => {
  expect(capitalize('aa')).toBe('Aa');
});

test('Check if first letter in string is capitalized.', () => {
  expect(capitalize('this is string')).toBe('This is string');
});