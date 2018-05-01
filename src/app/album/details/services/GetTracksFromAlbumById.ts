import {Injectable} from '@angular/core';
import ServiceInterface from '../../../Common/Service/ServiceInterface';
import MusicAdapterInterface from '../../adapters/CommonAdapterInterface';
import MusicRequest from '../../../Request/MusicRequest';

@Injectable()
export class GetTracksFromAlbumById implements ServiceInterface {
  private adapter: MusicAdapterInterface;

  constructor(adapter: MusicAdapterInterface) {
    this.adapter = adapter;
  }

  handle(id: number, limit?: number): any {
    return this.adapter.get(
      new MusicRequest(id, 'song', limit)
    );
  }

}
