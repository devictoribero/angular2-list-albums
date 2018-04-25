import {async} from '@angular/core/testing';
import HTTPClient from '../../common/http/HTTPClient';
import AppleMusicClient from './AppleMusicClient';

describe('AppleMusicClient tests', () => {
  let appleMusicClient: AppleMusicClient;
  beforeEach(() => {
    appleMusicClient = new AppleMusicClient(new HTTPClient());
  });

  it('GIVEN an request limited WHEN we querystring THEN the data is correct',
    async(() => {
      const url = 'id=909253&entity=album&limit=10';
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
