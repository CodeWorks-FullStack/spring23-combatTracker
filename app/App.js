import { CharactersController } from "./Controllers/CharactersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController(); NOTE comment this out to disable it
  charactersController = new CharactersController()
}

window["app"] = new App();
