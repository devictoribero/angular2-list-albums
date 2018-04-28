import ServiceInterface from '../../../common/service/ServiceInterface';
import {GetAlbumsByArtistId} from '../../list/services/GetAlbumsByArtistId';
import MusicAdapter from '../../adapters/MusicAdapter';
import AppleMusicClient from '../../../../infrastructure/AppleMusic/clients/AppleMusicClient';
import HTTPClient from '../../../../infrastructure/http/clients/HTTPClient';
import {async} from '@angular/core/testing';
import {GetTracksFromAlbumById} from './GetTracksFromAlbumById';
import GetAlbumsByArtistIdTransformer from '../../list/transformers/GetAlbumsByArtistIdTransformer';

describe('GetTracksFromAlbumById tests', () => {
  let getTracksFromAlbumById: ServiceInterface;

  beforeEach(() => {
    getTracksFromAlbumById = new GetTracksFromAlbumById(
      new MusicAdapter(
        new GetAlbumsByArtistIdTransformer(),
        new AppleMusicClient(
          new HTTPClient()
        )
      )
    );
  });

  it('GIVEN an album id WHEN we fetch data THEN we have the result limited by 2', async(() => {
    const albumID = 909253;
    const numberAlbumsMax = 2;
    getTracksFromAlbumById.handle(albumID, numberAlbumsMax).then(res => {
      expect(res.totalAlbums).toBe(2);
    });
  }));


});
