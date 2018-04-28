import Artist from '../../../Artist/entity/Artist';
import Track from '../../../track/entity/Track';

export default class AlbumDetailsDTO {
  private _artist: Artist;
  private _totalTracks: number;
  private _tracks: Array<Track>;

  constructor(artist: Artist, tracks: Array<Track>) {
    this._artist = artist;
    this._tracks = tracks;
    this._totalTracks = tracks.length;
  }

  get artist(): Artist {
    return this._artist;
  }

  set artist(value: Artist) {
    this._artist = value;
  }

  get totalTracks(): number {
    return this._totalTracks;
  }

  set totalTracks(value: number) {
    this._totalTracks = value;
  }

  get tracks(): Array<Track> {
    return this._tracks;
  }

  set tracks(value: Array<Track>) {
    this._tracks = value;
  }
}