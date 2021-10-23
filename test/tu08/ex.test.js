import checkPassword from '../../docs/tu08/ex1';

it('is a valid password, but not enough length', () => {
  expect(checkPassword('aA1_')).toBeFalsy();
});

it('is a valid password', () => {
  expect(checkPassword('PA!!SS123word')).toBeTruthy();
});

it('is an invalid password, and not enough length', () => {
  expect(checkPassword('aA1')).toBeFalsy();
});

it('is an invalid password', () => {
  expect(checkPassword('Pass55Word')).toBeFalsy();
});
