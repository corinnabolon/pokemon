import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { Pop } from "../utils/Pop.js"
import { pokeApi } from "./AxiosService.js"

class WildPokemonsService {

  constructor() {
    console.log("WildPokemonsService loaded")
  }

  async getWildPokemons() {
    try {
      const res = await pokeApi.get("")
      console.log("GOT POKEMON", res.data)
      AppState.wildPokemons = res.data.results
      console.log("AppState wildPokemons", AppState.wildPokemons)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }



  async setActivePokemon(pokemonUrl) {

    try {
      console.log("Pokemon index", pokemonUrl)
      const res = await pokeApi.get(`${pokemonUrl}`)
      console.log("Got data", res.data)
      let newPokemon = new Pokemon(res.data)
      AppState.activePokemon = newPokemon
      console.log("active Pokemon type", AppState.activePokemon.types)
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }

}

export const wildPokemonsService = new WildPokemonsService()