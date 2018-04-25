import HTTPClient from '../../http/HTTPClient';

export default class AppleMusicClient extends HTTPClient {
  private basepath = 'https://itunes.apple.com/lookup?';
  private httpclient: HTTPClient;

  constructor(httpclient: HTTPClient) {
    super();
    this.httpclient = httpclient;
  }

  getMusicByArtist(id: number) {
    this.httpclient.get(`${this.basepath}/id=${id}`);
  }

  getMusicByArtist(id: number) {
    this.httpclient.get(`${this.basepath}/id=${id}`);
  }
}