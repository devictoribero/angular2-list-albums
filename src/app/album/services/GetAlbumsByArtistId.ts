import {Injectable} from '@angular/core';
import ServiceInterface from '../../common/service/ServiceInterface';
import MusicAdapterInterface from '../adapters/MusicAdapterInterface';
import MusicRequest from '../../Request/MusicRequest';

@Injectable()
export class GetAlbumsByArtistId implements ServiceInterface {
  private adapter: MusicAdapterInterface;

  constructor(adapter: MusicAdapterInterface) {
    this.adapter = adapter;
  }

  handle(id: number, limit?: number): any {
    console.log(id);
    return this.adapter.get(
      new MusicRequest(id, 'album', limit)
    );
  }

}
