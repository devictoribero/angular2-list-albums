import {Injectable} from '@angular/core';
import MusicRequest from '../../Request/MusicRequest';
import AppleMusicClientInterface from '../clients/MusicClientInterface';
import MusicAdapterInterface from './MusicAdapterInterface';

@Injectable
export default class MusicAdapter implements MusicAdapterInterface {
  private client: AppleMusicClientInterface;

  constructor(client: AppleMusicClientInterface) {
    this.client = client;
  }

  get(request: MusicRequest): Promise<any> {
    return this.client.get(
      this.handleRequest(request)
    );
  }

  handleRequest(request: MusicRequest): string {
    return request.getQueryString();
  }
}
