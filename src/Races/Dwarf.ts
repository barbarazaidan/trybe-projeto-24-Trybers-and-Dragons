import Race from './Race';

export default class Dwarf extends Race {
  private __lifePoints: number;
  // aqui crio o atributo que vai contar cada novo personagem da classe Dwarf
  private static _instancesCount = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this.__lifePoints = 80;
    // a cada novo Dwarf criardo, incremento o atributo instancesCount em 1
    Dwarf._instancesCount += 1;
  }

  get maxLifePoints() {
    return this.__lifePoints;
  }

  // implemento a função createdRacesInstances para retornar o valor do atributo _instancesCount
  static createdRacesInstances(): number {
    return Dwarf._instancesCount;
  }
}