import sumInput from '../../docs/tu09/ex1.bl';

it('sums an array of numbers', () => {
  const numbers = [2, 4, 5, 6];
  expect(sumInput(numbers)).toBe(17);
});
