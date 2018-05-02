import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AlbumService from '../../services/MusicService';

@Injectable()
export class GetAlbumsByArtistId extends AlbumService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  handle(id: number, limit?: number): any {
    return this.httpClient.get('https://itunes.apple.com/lookup?id=' + id + '&entity=album');
  }
}
