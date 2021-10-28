import { unique, aclean } from '../../docs/tu10/exercises';

describe('Exercise 1 tests', () => {
  it('returns a unique array', () => {
    expect(unique([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
  it('excludes duplicates', () => {
    expect(unique([1, 1, 1, 2, 2])).toStrictEqual([1, 2]);
  });
});

describe('Excercise 2 tests', () => {
  it('cleans anagrams and checks the length of the resulting array', () => {
    const anagrams = aclean([
      'nap',
      'teachers',
      'cheaters',
      'PAN',
      'ear',
      'era',
      'hectares',
    ]);
    expect(anagrams.length).toBe(3);
  });
});
