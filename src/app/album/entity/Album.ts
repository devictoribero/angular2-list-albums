export default class Album {
  private _id: number;
  private _name: string;
  private _author: string;
  private _thumbnail_url: string;
  private _price: number;
  private _numOfSongs: number;
  private _currency: string;

  constructor(
    id: number,
    name: string,
    author: string,
    image: string,
    numOfSongs: number,
    price: number,
    currency: string,
  ) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._thumbnail_url = image;
    this._numOfSongs = numOfSongs;
    this._price = price;
    this._currency = currency;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get author(): string {
    return this._author;
  }

  get thumbnail_url(): string {
    return this._thumbnail_url;
  }

  get price(): number {
    return this._price;
  }

  get numOfSongs(): number {
    return this._numOfSongs;
  }

  get currency(): string {
    return this._currency;
  }
}
