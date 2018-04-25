import {async} from '@angular/core/testing';
import HTTPClient from '../../common/http/HTTPClient';
import AppleMusicClient from './AppleMusicClient';
import AppleMusicRequest from '../Request/AppleMusicRequest';

describe('AppleMusicClient tests', () => {
  let appleMusicClient: AppleMusicClient;
  beforeEach(() => {
    appleMusicClient = new AppleMusicClient(new HTTPClient());
  });

  it('GIVEN an request limited WHEN we querystring that THEN the data is correct',
    async(() => {
      const request = new AppleMusicRequest(909253, 'album');
      appleMusicClient.get(request).then(res => {
        expect(res.resultCount).toBe(11);
      });
    }
  ));

  it('GIVEN an invalid ID WHEN we querystring that THEN there are no results',
    async(() => {
        const request = new AppleMusicRequest(-1);
        appleMusicClient.get(request).then(res => {
          expect(res.resultCount).toBe(0);
        });
      }
    ));
});
