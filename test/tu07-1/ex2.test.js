import { isEmpty } from '../../docs/tu07-1/ex2';

it('checks isEmpty for an empty object', () => {
  expect(isEmpty({})).toBeTruthy();
});

it('checks isEmpty for an empty object v2', () => {
  const car = {
    color: 'red',
    wheels: 4,
  };
  expect(isEmpty(car)).toBeFalsy();
});
