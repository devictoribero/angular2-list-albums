export default class Track {
  private _id: number;
  private _name: string;
  private _author: string;
  private _price: number;
  private _timeMiliseconds: number;

  constructor(id: number, name: string, author: string, price: number, timeMiliseconds: number) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._price = price;
    this._timeMiliseconds = timeMiliseconds;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get timeMiliseconds(): number {
    return this._timeMiliseconds;
  }

  set timeMiliseconds(value: number) {
    this._timeMiliseconds = value;
  }
}