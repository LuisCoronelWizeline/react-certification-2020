/* eslint-disable import/extensions */
import filterPokemon from './filterPokemon';
import { mockPokemonsData } from '../mock/pokeData';

describe('Filter Pokemon', () => {
  test('it should return an array', () => {
    /* Your solution comes here */
    const pokemon = filterPokemon(mockPokemonsData, '');
    let isArray;
    if (typeof pokemon === 'object') {
      isArray = true;
    }
    expect(isArray).toBe(true);
  });

  test('it should return an empty array', () => {
    /* Your solution comes here */
    const pokemon = filterPokemon(mockPokemonsData, '');
    let isArrayEmpty;
    if (pokemon[0] === undefined) {
      isArrayEmpty = true;
    }
    expect(isArrayEmpty).toBe(true);
  });

  test('it should return an array with charizard object', () => {
    /* Your solution comes here */
    const pokemon = filterPokemon(mockPokemonsData, 'charizard');
    let isCharizard;
    if (pokemon[0].name === 'charizard') {
      isCharizard = pokemon[0].name;
    }
    expect(isCharizard).toBe('charizard');
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    const pokemon = filterPokemon();
    expect(pokemon).toBe(false);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
  });
});
