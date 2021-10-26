import getAverageAge from '../../docs/tu09/ex2';

it('calculates the top salary', () => {
  const john = { name: 'John', age: 25 };
  const pete = { name: 'Pete', age: 30 };
  const mary = { name: 'Mary', age: 29 };

  const arr = [john, pete, mary];
  expect(getAverageAge(arr)).toBe(28);
});
