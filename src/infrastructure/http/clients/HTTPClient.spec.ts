import HTTPClient from './HTTPClient';
import {async} from '@angular/core/testing';

describe('HTTPClient unit tests', () => {
  let httpclient: HTTPClient;
  beforeEach(() => {
    httpclient = new HTTPClient();
  });

  it('the GET petition works perfectly', async(() => {
    const _getFrom = 'https://itunes.apple.com/lookup?amgArtistId=468749,5723&Entity=album&limit=5';
    httpclient.get(_getFrom).then(res => {
      expect(res.resultCount).toBe(12);
    });
  }));
});
