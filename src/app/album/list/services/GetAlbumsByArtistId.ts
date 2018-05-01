import {Injectable} from '@angular/core';
import MusicRequest from '../../../Request/MusicRequest';
import AlbumService from '../../services/MusicService';
import MusicAdapter from '../../adapters/MusicAdapter';

@Injectable()
export class GetAlbumsByArtistId extends AlbumService {

  constructor(adapter: MusicAdapter) {
    super(adapter);
  }

  handle(id: number, limit?: number): Promise<any> {
    return this.adapter.get(
      new MusicRequest(id, 'album', limit)
    );
  }

}
