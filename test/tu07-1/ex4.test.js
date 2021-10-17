import multiplyNumeric from '../../docs/tu07-1/ex4';

it('doubles just the number properties', () => {
  const menu = {
    width: 200,
    height: 300,
    title: 'My menu',
  };
  multiplyNumeric(menu);
  expect(menu.width).toBe(400);
  expect(menu.height).toBe(600);
  expect(menu.title).toBe('My menu');
});
