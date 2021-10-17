import sumSalaries from '../../docs/tu07-1/ex3';

it('agregates salaries from an object', () => {
  expect(
    sumSalaries({
      John: 100,
      Ann: 160,
      Pete: 130,
    })
  ).toEqual(390);
});

it('agregates zero from an empty object', () => {
  expect(sumSalaries({})).toEqual(0);
});
