// a classe abstrata serve de base para as classes que a herdam
export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name:string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  // Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race.
  // Então, aqui coloco somente a descrição do método, mas não a implementação.
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // aqui postergo a implementação do método maxLifePoints para as classes filhas realizarem a implementação da forma que desejarem

  abstract get maxLifePoints(): number;
}