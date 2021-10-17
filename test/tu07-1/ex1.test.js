import createUser from '../../docs/tu07-1/ex1';

it('creates a user without the name property', () => {
  const user = createUser();
  expect(user.name).toBeUndefined();
});
