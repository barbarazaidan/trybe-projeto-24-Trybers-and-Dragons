import Race from './Race';

export default class Elf extends Race {
  private __lifePoints: number;
  private static _instancesCount = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this.__lifePoints = 99;
    Elf._instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this.__lifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._instancesCount;
  }
}