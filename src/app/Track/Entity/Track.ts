export default class Track {
  private _id: number;
  private _trackNumber: number;
  private _name: string;
  private _author: string;
  private _price: number;
  private _timeMiliseconds: number;
  private _previewUrl?: string;

  constructor(
    id: number,
    trackNumber: number,
    name: string,
    author: string,
    price: number,
    timeMiliseconds: number,
    previewUrl?: string,
  ) {
    this._id = id;
    this._trackNumber = trackNumber;
    this._name = name;
    this._author = author;
    this._price = price;
    this._timeMiliseconds = timeMiliseconds;
    this._previewUrl = previewUrl;
  }

  get id(): number {
    return this._id;
  }

  get trackNumber(): number {
    return this._trackNumber;
  }

  get name(): string {
    return this._name;
  }

  get author(): string {
    return this._author;
  }

  get price(): number {
    return this._price;
  }

  get timeMiliseconds(): number {
    return this._timeMiliseconds;
  }

  get previewUrl(): string {
    return this._previewUrl;
  }
}
