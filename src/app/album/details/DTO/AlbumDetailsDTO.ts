import Artist from '../../../Artist/entity/Artist';
import Track from '../../../Track/Entity/Track';

export default class AlbumDetailsDTO {
  private _name: string;
  private _artist: Artist;
  private _albumThumbnail: string;
  private _totalTracks: number;
  private _tracks: Array<Track>;

  constructor(artist: Artist, thumbnail: string, tracks: Array<Track>) {
    this._artist = artist;
    this._tracks = tracks;
    this._albumThumbnail = thumbnail;
    this._totalTracks = tracks.length;
  }

  get name(): string {
    return this._name;
  }

  get artist(): Artist {
    return this._artist;
  }

  get albumThumbnail(): string {
    return this._albumThumbnail;
  }

  get totalTracks(): number {
    return this._totalTracks;
  }

  get tracks(): Array<Track> {
    return this._tracks;
  }
}