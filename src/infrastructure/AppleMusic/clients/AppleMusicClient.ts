import {Injectable} from '@angular/core';
import HTTPClient from '../../http/clients/HTTPClient';
import MusicClientInterface from '../../../app/album/clients/MusicClientInterface';

@Injectable()
export default class AppleMusicClient implements MusicClientInterface {
  public basepath = 'https://itunes.apple.com';

  private httpClient: HTTPClient;

  constructor(httpClient: HTTPClient) {
    this.httpClient = httpClient;
  }

  get(querystring: string): Promise<any> {
    return this.httpClient.get(this.basepath + '/lookup?' + querystring);
  }
}
