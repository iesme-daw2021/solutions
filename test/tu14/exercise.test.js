import { getMostPopulatedCity } from '../../docs/tu14/exercise';

describe('Rest test suite', () => {
  it('gets the most populated city', () => {
    // input data
    const cities = [
      {
        name: 'Beniarjo',
        population: 1746,
      },
      {
        name: 'Xeresa',
        population: 2145,
      },
      {
        name: 'Rotova',
        population: 1262,
      },
      {
        name: 'Rafelcofer',
        population: 1358,
      },
    ];

    // Destructuring the object {name: xxx, population: yyy}
    const { name } = getMostPopulatedCity(...cities);

    expect(name).toBe('Xeresa');
  });
});
