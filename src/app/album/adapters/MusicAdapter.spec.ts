import {async} from '@angular/core/testing';
import HTTPClient from '../../common/http/HTTPClient';
import MusicRequest from '../../Request/MusicRequest';
import MusicAdapter from './MusicAdapter';
import MusicAdapterInterface from './MusicAdapterInterface';
import AppleMusicClient from '../../../infrastructure/AppleMusic/clients/AppleMusicClient';

describe('MusicAdapter tests', () => {
  let appleMusicAdapter: MusicAdapterInterface;

  beforeEach(() => {
    appleMusicAdapter = new MusicAdapter(new AppleMusicClient(new HTTPClient()));
  });

  it('GIVEN a request WHEN we handle it THEN it is well transformed to be used by the client',
    async(() => {
      const request = new MusicRequest(909253, 'album', 10);
      const requestPrepared = 'id=909253&entity=album&limit=10';
      expect(appleMusicAdapter.handleRequest(request)).toBe(requestPrepared);
    }
  ));

  it('GIVEN a request WHEN we call the client THEN returns the data correctly',
    async(() => {
        const request = new MusicRequest(909253, 'album', 10);
        appleMusicAdapter.get(request).then(res => {
          expect(res.resultCount).toBe(11);
        });
      }
    ));
});
