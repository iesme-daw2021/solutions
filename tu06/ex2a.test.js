import checkAge from './ex2a';

test('A 17 years old person is not an adult', () => {
  expect(checkAge(17)).toBe(false);
});

test('A 18 years old person is an adult', () => {
  expect(checkAge(18)).toBe(true);
});

test('A 19 years old person is an adult', () => {
  expect(checkAge(19)).toBe(true);
});
