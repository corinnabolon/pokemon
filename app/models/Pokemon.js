export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = ""
    this.img = data.img || data.sprites.front_default
    this.weight = data.weight || data.stats.weight
    this.height = data.height
    this.types = data.types
  }

  get ActivePokemonTemplate() {
    return `
    <p class="fs-1">${this.name}</p>
    <img src="${this.img}" alt="${this.name} image" class="pokemon-image">
    <div class="mt-5">
      <p><span class="fw-bold">Weight:</span> ${this.weight}</p>
      <p><span class="fw-bold">Height:</span> ${this.height}</p>
      <div class="d-flex justify-content-between">
      <div><span class="fw-bold">Types:</span></div>
      <div>${this.FindAllTypes}</div>
      </div>
    </div>
    `
  }

  get FindAllTypes() {
    let content = ''
    this.types.forEach(type => content += `${type.type.name}<br>`)
    return content
  }






  static wildListTemplate(pokemon) {
    return `            <div class="text-center m-1">
    <button onclick="app.WildPokemonsController.setActivePokemon('${pokemon.url}')" class="btn btn-primary w-100">${pokemon.name}</button>
  </div>`
  }

}


let PokemonData = `{
  "name": {
    "type": "String",
    "required": true,
    "maxLength": 100
  },
  "nickName": {
    "type": "String",
    "maxLength": 100
  },
  "img": {
    "type": "String",
    "required": true,
    "maxLength": 500
  },
  "weight": {
    "type": "String",
    "maxLength": 100
  },
  "height": {
    "type": "String",
    "maxLength": 100
  },
  "types": [
    {}
  ],
  "creatorId": {
    "type": "ObjectId",
    "required": true,
    "ref": "Account"
  }
}`