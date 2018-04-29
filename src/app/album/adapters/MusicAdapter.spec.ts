import {async} from '@angular/core/testing';
import HTTPClient from '../../../infrastructure/http/clients/HTTPClient';
import MusicRequest from '../../Request/MusicRequest';
import MusicAdapter from './MusicAdapter';
import MusicAdapterInterface from './MusicAdapterInterface';
import AppleMusicClient from '../../../infrastructure/AppleMusic/clients/AppleMusicClient';
import GetAlbumsByArtistIdTransformer from '../list/transformers/GetAlbumsByArtistIdTransformer';

describe('MusicAdapter tests', () => {
  let musicAdapter: MusicAdapterInterface;

  beforeEach(() => {
    musicAdapter = new MusicAdapter(
      new GetAlbumsByArtistIdTransformer(),
      new AppleMusicClient(new HTTPClient())
    );
  });

  it('GIVEN a request WHEN we handle it THEN it is well transformed to be used by the client',
    async(() => {
      const request = new MusicRequest(909253, 'album', 10);
      const requestPrepared = 'id=909253&entity=album&limit=10';
      console.log(requestPrepared);
      console.log(musicAdapter.handleRequest(request));
      expect(musicAdapter.handleRequest(request)).toBe(requestPrepared);
    }
  ));

  it('GIVEN a request WHEN we call the client THEN returns the data correctly',
    async(() => {
        const request = new MusicRequest(909253, 'album', 10);
        musicAdapter.get(request).then(res => {
          console.log(res);
          expect(res.totalAlbums).toBe(10);
        });
      }
    )
  );
});
