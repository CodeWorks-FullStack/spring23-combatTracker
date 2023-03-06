import { appState } from "../AppState.js"



class CharactersService {
  heal(name) {
    let character = appState.characters.find(c => c.name == name)
    character.hp += Math.ceil(Math.random() * 7) + 1 //NOTE just weird DnD Math 
  }

  damage(name) {
    let character = appState.characters.find(c => c.name == name)
    console.log('damaging', character);
    character.hp--
  }

}

export const charactersService = new CharactersService()