import Race from './Race';

export default class Orc extends Race {
  private __lifePoints: number;
  private static _instancesCount = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this.__lifePoints = 74;
    Orc._instancesCount += 1;
  }

  get maxLifePoints() {
    return this.__lifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instancesCount;
  }
}