import { appState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";



export class CharactersController {

  constructor() {
    console.log('characters controller loaded')
    appState.characters.forEach(c => c.greeting())
    this.drawCharacters()
  }

  drawCharacters() {
    let characters = appState.characters
    let template = ''
    characters.forEach(character => template += character.CharacterTemplate)
    document.getElementById('characters').innerHTML = template
  }

  damage(name) {
    charactersService.damage(name)
    console.log('after service call');
    this.drawCharacters()
  }

  heal(name) {
    charactersService.heal(name)
    this.drawCharacters()
  }
}