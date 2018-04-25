import MusicRequest from '../../Request/MusicRequest';
import HTTPClient from '../../common/http/HTTPClient';
import AppleMusicClientInterface from '../../../infrastructure/AppleMusic/clients/AppleMusicClientInterface';
import MusicAdapterInterface from './MusicAdapterInterface';

export default class MusicAdapter implements MusicAdapterInterface {
  private client: AppleMusicClientInterface;

  constructor(client: AppleMusicClientInterface) {
    this.client = client;
  }

  get(request: MusicRequest): Promise<any> {
    return this.client.get(this.handleRequest(request));
  }

  handleRequest(request: MusicRequest): string {
    return request.getQueryString();
  }
}
