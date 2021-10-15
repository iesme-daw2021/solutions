import { isEmpty } from './ex2';

it('checks isEmpty for an empty object', () => {
  expect(isEmpty({})).toBeTruthy();
});

it('checks isEmpty for an empty object', () => {
  const car = {
    color: 'red',
    wheels: 4,
  };
  expect(isEmpty(car)).toBeFalsy();
});
