export default class Artist {
  private _id: number;
  private _linkUrl: string;
  private _name: string;
  private _primaryGenreName: string;

  constructor(id: number, linkUrl: string, name: string, primaryGenreName: string) {
    this._id = id;
    this._linkUrl = linkUrl;
    this._name = name;
    this._primaryGenreName = primaryGenreName;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get linkUrl(): string {
    return this._linkUrl;
  }

  set linkUrl(value: string) {
    this._linkUrl = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get primaryGenreName(): string {
    return this._primaryGenreName;
  }

  set primaryGenreName(value: string) {
    this._primaryGenreName = value;
  }
}