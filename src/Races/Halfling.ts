import Race from './Race';

export default class Halfling extends Race {
  private __lifePoints: number;
  private static _instancesCount = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this.__lifePoints = 60;
    Halfling._instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this.__lifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._instancesCount;
  }
}