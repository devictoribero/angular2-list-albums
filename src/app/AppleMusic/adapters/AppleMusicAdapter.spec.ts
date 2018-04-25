import {async} from '@angular/core/testing';
import HTTPClient from '../../common/http/HTTPClient';
import AppleMusicRequest from '../Request/AppleMusicRequest';
import AppleMusicAdapter from './AppleMusicAdapter';
import AppleMusicAdapterInterface from './AppleMusicAdapterInterface';
import AppleMusicClient from '../clients/AppleMusicClient';

describe('AppleMusicAdapter tests', () => {
  let appleMusicAdapter: AppleMusicAdapterInterface;

  beforeEach(() => {
    appleMusicAdapter = new AppleMusicAdapter(new AppleMusicClient(new HTTPClient()));
  });

  it('GIVEN a request WHEN we handle it THEN it is well transformed to be used by the client',
    async(() => {
      const request = new AppleMusicRequest(909253, 'album', 10);
      const requestPrepared = 'id=909253&entity=album&limit=10';
      expect(appleMusicAdapter.handleRequest(request)).toBe(requestPrepared);
    }
  ));

  it('GIVEN a request WHEN we call the client THEN returns the data correctly',
    async(() => {
        const request = new AppleMusicRequest(909253, 'album', 10);
        appleMusicAdapter.get(request).then(res => {
          expect(res.resultCount).toBe(11);
        });
      }
    ));


});
