import AppleMusicRequest from '../Request/AppleMusicRequest';
import HTTPClient from '../../common/http/HTTPClient';
import AppleMusicClientInterface from '../clients/AppleMusicClientInterface';
import AppleMusicAdapterInterface from './AppleMusicAdapterInterface';

export default class AppleMusicAdapter implements AppleMusicAdapterInterface {
  private client: AppleMusicClientInterface;

  constructor(client: AppleMusicClientInterface) {
    this.client = client;
  }

  get(request: AppleMusicRequest): Promise<any> {
    return this.client.get(this.handleRequest(request));
  }

  handleRequest(request: AppleMusicRequest): string {
    return request.getQueryString();
  }
}
