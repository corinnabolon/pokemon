import { AppState } from "../AppState.js"
import { sandboxPokemonService } from "../services/SandboxPokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawMyPokemon() {
  let caughtPokemons = AppState.caughtPokemons
  let content = ""
  caughtPokemons.forEach(pokemon => content += pokemon.caughtPokemonTemplate)
  setHTML("caughtPokemonOffCanvas", content)
}
export class SandboxPokemonsController {
  constructor() {
    console.log("Sandbox Pokemon Controller loaded!")

    AppState.on("caughtPokemons", _drawMyPokemon)
  }

  async catchPokemon() {
    try {
      await sandboxPokemonService.catchPokemon()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }

  }

}