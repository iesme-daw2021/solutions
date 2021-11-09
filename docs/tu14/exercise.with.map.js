export function getMostPopulatedCity(...cities) {
  return cities.reduce(
    (prev, curr) => {
      return curr.population > prev.population ? curr : prev;
    },
    { name: '', population: 0 }
  );
}
