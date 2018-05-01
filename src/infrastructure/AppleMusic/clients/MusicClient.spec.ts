import {async} from '@angular/core/testing';
import HTTPClient from '../../http/clients/HTTPClient';
import AppleMusicClient from './MusicClient';

describe('AppleMusicClient tests', () => {
  let appleMusicClient: AppleMusicClient;
  beforeEach(() => {
    appleMusicClient = new AppleMusicClient(new HTTPClient());
  });

  it('GIVEN an request limited WHEN we querystring THEN the data is correct',
    async(() => {
      const url = 'id=909253&Entity=album&limit=10';
      appleMusicClient.get(url).then(res => {
        expect(res.resultCount).toBe(11);
      });
    }
  ));

  it('GIVEN an invalid ID WHEN we querystring THEN there are no results',
    async(() => {
        appleMusicClient.get('id=-1').then(res => {
          expect(res.resultCount).toBe(0);
        });
      }
    ));
});