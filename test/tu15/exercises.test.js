import { sum, byField } from '../../docs/tu15/exercises';

describe('Closure Ex1 test suite', () => {
  it('sums 1 and 2', () => {
    expect(sum(1)(2)).toBe(3);
  });
  it('sums 5 and -1', () => {
    expect(sum(5)(-1)).toBe(4);
  });
});
describe('Closure Ex2 test suite', () => {
  let users = [
    { name: 'John', age: 20, surname: 'Johnson' },
    { name: 'Pete', age: 18, surname: 'Peterson' },
    { name: 'Ann', age: 19, surname: 'Hathaway' },
  ];
  it('sorts by name', () => {
    users.sort(byField('name'));
    expect(users[0].name).toBe('Ann');
  });
  it('sorts by age', () => {
    users.sort(byField('age'));
    expect(users[0].name).toBe('Pete');
  });
});
