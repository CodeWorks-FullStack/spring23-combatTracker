import { Character } from "./Models/Character.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// NOTE don't worry about this part right now either
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  // NOTE characters is a property that exists on our appstate, and is just a normal array that contains Characters
  characters = [
    new Character('Slade Slabrock', 5, 'Fighter', 32),
    new Character('Flint Ironstag', 5, 'Ranger', 23),
    new Character('Thud the Ogre', 8, 'Ogre', 56)
  ]


}



// NOTE don't worry about this down here, "car go"
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

console.log(appState.characters)
