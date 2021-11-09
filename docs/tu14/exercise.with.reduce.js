export function getMostPopulatedCity(...cities) {
  return cities.reduce(
    (prev, curr) => (curr.population > prev.population ? curr : prev),
    { name: '', population: 0 }
  );
}
