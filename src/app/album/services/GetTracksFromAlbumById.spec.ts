import ServiceInterface from '../../common/service/ServiceInterface';
import {GetAlbumsByArtistId} from './GetAlbumsByArtistId';
import MusicAdapter from '../adapters/MusicAdapter';
import AppleMusicClient from '../../../infrastructure/AppleMusic/clients/AppleMusicClient';
import HTTPClient from '../../../infrastructure/http/clients/HTTPClient';
import {async} from '@angular/core/testing';
import {GetTracksFromAlbumById} from './GetTracksFromAlbumById';

describe('GetTracksFromAlbumById tests', () => {
  let getTracksFromAlbumById: ServiceInterface;

  beforeEach(() => {
    getTracksFromAlbumById = new GetTracksFromAlbumById(
      new MusicAdapter(
        new AppleMusicClient(
          new HTTPClient()
        )
      )
    );
  });

  it('GIVEN an album id WHEN we fetch data THEN we have the result limited by 3', async(() => {
    const albumID = 909253;
    const numberAlbumsMax = 2;
    getTracksFromAlbumById.handle(albumID, numberAlbumsMax).then(res => {
      console.log(res);
      expect(res.resultCount).toBe(3);
    });
  }));


});
