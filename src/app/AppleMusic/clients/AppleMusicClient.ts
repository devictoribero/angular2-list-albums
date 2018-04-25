import AppleMusicRequest from '../Request/AppleMusicRequest';
import HTTPClient from '../../common/http/HTTPClient';

export default class AppleMusicClient {
  public basepath = 'https://itunes.apple.com/lookup?';
  private httpclient: HTTPClient;

  constructor(httpclient: HTTPClient) {
    this.httpclient = httpclient;
  }

  get(request: AppleMusicRequest): Promise<any> {
    return this.httpclient.get(this.basepath + request.getQueryString());
  }
}
