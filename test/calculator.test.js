import calculator from "../code/calculator.js";

test('Add 1 + 2, result 3', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('Add 10 + 5, result 15', () => {
  expect(calculator.add(10, 5)).toEqual(15);
});

test('Subract 3 - 2, result 1', () => {
  expect(calculator.subtract(3, 2)).toEqual(1);
});

test('Subract 1 - 2, result -1', () => {
  expect(calculator.subtract(1, 2)).toEqual(-1);
});

test('Divide 4 / 2, result 2', () => {
  expect(calculator.divide(4, 2)).toEqual(2);
});

test('Divide 10 / 2.5, result 4', () => {
  expect(calculator.divide(10, 2.5)).toEqual(4);
});

test('Multiply 2 * 2, result 4', () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
});

test('Multiply 2.5 * 10, result 25', () => {
  expect(calculator.multiply(2.5, 10)).toEqual(25);
});