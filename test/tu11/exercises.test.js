import { getLastDayOfMonth, getWeekDay } from '../../docs/tu11/exercises';

describe('Exercise 1 tests', () => {
  it('gets the weekday', () => {
    const date = new Date(2022, 0, 3); // 3 Jan 2022
    expect(getWeekDay(date)).toBe('MO');
  });
});

describe('Excercise 2 tests', () => {
  it('gets the last day of the month', () => {
    expect(getLastDayOfMonth(2012, 1)).toBe(29);
  });
});
