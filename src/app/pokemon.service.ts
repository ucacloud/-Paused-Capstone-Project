import { Injectable } from '@angular/core';
import { Pokemons } from './pokemons';
import { POKEMON } from './mock-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }

  getPokemon(): Pokemons[] {
    return POKEMON;
  }
}
