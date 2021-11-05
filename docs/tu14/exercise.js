export function getMostPopulatedCity(...cities) {
  cities.sort((cityA, cityB) => {
    return cityB.population - cityA.population;
  });

  return cities.shift();
}
