import Artist from '../../Artist/entity/Artist';
import Track from '../../Track/Entity/Track';

export default class Album {
  private _id: number;
  private _name: string;
  private _thumbnail_url: string;
  private _price: number;
  private _currency: string;
  private _artist: Artist;
  private _numOfTracks: number;
  private _tracks?: Array<Track>;

  constructor(
    id: number,
    name: string,
    image: string,
    price: number,
    currency: string,
    artist: Artist,
    numOfTracks: number,
    tracks?: Array<Track>,
  ) {
    this._id = id;
    this._name = name;
    this._thumbnail_url = image;
    this._price = price;
    this._currency = currency;
    this._artist = artist;
    this._numOfTracks = numOfTracks;
    this._tracks = tracks;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get thumbnail_url(): string {
    return this._thumbnail_url;
  }

  get price(): number {
    return this._price;
  }

  get currency(): string {
    return this._currency;
  }

  get artist(): Artist {
    return this._artist;
  }

  get tracks(): Array<Track> {
    return this._tracks;
  }

  get numOfTracks(): number {
    return this._numOfTracks;
  }
}
