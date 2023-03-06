



export class Character {
  // NOTE you can define properties (fields) on a class like this
  // name
  // level
  // class
  // hp
  // maxHp

  // NOTE or you can in just the constructor, they both do the same
  constructor(name, level, subClass, hp) {
    this.name = name
    this.level = level
    this.subClass = subClass
    this.hp = hp
    this.maxHp = hp
    // this.percentHealth = 100 instead of hardcoding this, lets calculate it on access (get)
  }

  greeting() {
    console.log(`Hello, my name is ${this.name}, I'm a level ${this.level} ${this.subClass}.`)
  }

  // NOTE get, is a special method that takes in no parameters and must have a return
  // can be used to calculate data on the fly
  get HealthPercentage() {
    return Math.round((this.hp / this.maxHp) * 100)
  }

  get CharacterTemplate() {
    return `
    <div class="col-4 p-3">
      <div class="bg-dark text-light rounded elevation-2 p-4 text-center">
        <h2>${this.name} | ${this.level}</h2>
        <h4 class="text-danger fw-bold lighten-20">${this.hp} 💘 ${this.maxHp}</h4>
        <h5 class="text-success fw-bold lighten-20">${this.HealthPercentage}%</h5>
        <button class="btn btn-outline-warning" onclick="app.charactersController.damage('${this.name}')">⚔️</button>
        <button class="btn btn-outline-success" onclick="app.charactersController.heal('${this.name}')">🧪</button>
      </div>
    </div>
    `
  }
}
