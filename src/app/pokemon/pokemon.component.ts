import { Component } from '@angular/core';
import { Pokemons } from '../pokemons';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  selectedPokemons!: Pokemons;

    pokemon: Pokemons[] = []

  constructor(private pokemonService: PokemonService) {}

    getPokemon = (): void => {
      this.pokemon = this.pokemonService.getPokemon();
    }

    select = (pokemons: Pokemons): void => {
      this.selectedPokemons = pokemons;
    }

    ngOnInit = (): void => {
      this.getPokemon();
    }
}
