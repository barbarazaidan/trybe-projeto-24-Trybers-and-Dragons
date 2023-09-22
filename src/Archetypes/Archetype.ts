export default class Archetype {
  private name: string;
  private special: number;
  private cost: number;

  constructor(name:string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }

  getName() {
    return this.name;
  }

  getSpecial() {  
    return this.special;
  }

  getCost() {
    return this.cost;
  }
}