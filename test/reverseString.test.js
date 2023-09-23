import reverseString from "../code/reverseString.js";

test('Reverse input string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Reverse input string', () => {
  expect(reverseString('second string')).toBe('gnirts dnoces');
});