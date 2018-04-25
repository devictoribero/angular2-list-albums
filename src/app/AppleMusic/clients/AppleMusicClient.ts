import AppleMusicRequest from '../Request/AppleMusicRequest';
import HTTPClient from '../../common/http/HTTPClient';
import AppleMusicClientInterface from './AppleMusicClientInterface';

export default class AppleMusicClient implements AppleMusicClientInterface {
  public basepath = 'https://itunes.apple.com/lookup?';
  private httpclient: HTTPClient;

  constructor(httpclient: HTTPClient) {
    this.httpclient = httpclient;
  }

  get(url: string): Promise<any> {
    return this.httpclient.get(this.basepath + url);
  }
}
