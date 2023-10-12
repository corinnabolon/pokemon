import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"


class SandboxPokemonService {
  controller() {

  }

  async catchPokemon() {
    const activePokemon = AppState.activePokemon
    const res = await api.post("api/pokemon", activePokemon)
    console.log("Caught Pokemon!", res.data)
    let caughtPokemon = new Pokemon(res.data)
    AppState.caughtPokemons.push(caughtPokemon)
    console.log(AppState.caughtPokemons)
    AppState.emit("caughtPokemons")
  }

}

export const sandboxPokemonService = new SandboxPokemonService()