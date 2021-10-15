import createUser from './ex1';

it('creates a user without the name property', () => {
  const user = createUser();
  expect(user.name).toBeUndefined();
});
