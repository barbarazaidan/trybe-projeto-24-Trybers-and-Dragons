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

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // aqui postergo a implementação do método maxLifePoints para as classes filhas realizarem a implementação da forma que desejarem

  abstract get maxLifePoints(): number;
}