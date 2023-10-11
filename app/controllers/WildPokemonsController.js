import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawWildPokemons() {
  let wildPokemons = AppState.wildPokemons
  let content = ``
  wildPokemons.forEach(pokemon => content += Pokemon.wildListTemplate(pokemon))
  setHTML("pokemonList", content)
}

function _drawActivePokemon() {
  let activePokemon = AppState.activePokemon
  setHTML("activePokemonDiv", activePokemon.ActivePokemonTemplate)
}

export class WildPokemonsController {
  constructor() {
    console.log("WildPokemonsController loaded")
    this.getWildPokemons()

    AppState.on("wildPokemons", _drawWildPokemons)
    AppState.on("activePokemon", _drawActivePokemon)
  }

  async getWildPokemons() {
    try {
      await wildPokemonsService.getWildPokemons()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


  async setActivePokemon(pokemonUrl) {
    try {
      await wildPokemonsService.setActivePokemon(pokemonUrl)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

}