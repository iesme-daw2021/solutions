import { topSalary } from '../../docs/tu09/ex3';

it('calculates the top salary', () => {
  const salaries = {
    John: 200,
    Ann: 250,
  };
  expect(topSalary(salaries)).toBe('Ann');
});

it('calculates one of the top salaries', () => {
  const salaries = {
    John: 200,
    Ann: 420,
    Peter: 250,
    July: 420,
  };
  expect(topSalary(salaries)).toBe('Ann');
});

it('returns null when the parameter is an empty object', () => {
  expect(topSalary({})).toBeNull();
});
