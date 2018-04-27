import AppleMusicRequest from '../../../app/Request/MusicRequest';
import HTTPClient from '../../http/clients/HTTPClient';
import AppleMusicClientInterface from './AppleMusicClientInterface';

export default class AppleMusicClient implements AppleMusicClientInterface {
  public basepath = 'https://itunes.apple.com';

  private httpClient: HTTPClient;

  constructor(httpClient: HTTPClient) {
    this.httpClient = httpClient;
  }

  get(querystring: string): Promise<any> {
    return this.httpClient.get(this.basepath + '/lookup?' + querystring);
  }
}
