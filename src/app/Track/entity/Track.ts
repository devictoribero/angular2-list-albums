export default class Track {
  private _name: string;
  private _timeMiliseconds: number;

  constructor(name, time) {
    this._name = name;
    this._timeMiliseconds = time;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get timeMiliseconds(): number {
    return this._timeMiliseconds;
  }

  set timeMiliseconds(value: number) {
    this._timeMiliseconds = value;
  }
}