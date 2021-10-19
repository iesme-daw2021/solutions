import Calculator from '../../docs/tu07-2/ex1';

it('sums two numbers using the Calculator object', () => {
  const calulator = new Calculator(230, 456);
  expect(calulator.sum()).toBe(230 + 456);
});

it('multiplies two numbers using the Calculator object', () => {
  const calulator = new Calculator(230, 456);
  expect(calulator.mul()).toBe(230 * 456);
});

it('calculates the average of two numbers using the Calculator object', () => {
  const calulator = new Calculator(230, 456);
  expect(calulator.avg()).toBe((230 + 456) / 2);
});
