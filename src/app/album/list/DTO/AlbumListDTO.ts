import Artist from '../../../Artist/entity/Artist';
import Album from '../../entity/Album';

export default class AlbumListDTO {
  private _artist: Artist;
  private _totalAlbums: number;
  private _albums: Array<Album>;

  constructor(artist: Artist, albums: Array<Album>) {
    this._artist = artist;
    this._albums = albums;
    this._totalAlbums = albums.length;
  }

  get artist(): Artist {
    return this._artist;
  }

  set artist(value: Artist) {
    this._artist = value;
  }

  get totalAlbums(): number {
    return this._totalAlbums;
  }

  set totalAlbums(value: number) {
    this._totalAlbums = value;
  }

  get albums(): Array<Album> {
    return this._albums;
  }

  set albums(value: Array<Album>) {
    this._albums = value;
  }
}