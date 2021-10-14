import isEven from './ex1';

test('7 is odd', () => {
  expect(isEven(7)).toBe(false);
});

test('104 is even', () => {
  expect(isEven(104)).toBe(true);
});

test('2760 is even', () => {
  expect(isEven(2760)).toBe(true);
});
