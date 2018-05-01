import ServiceInterface from '../../../Common/Service/CommonServiceInterface';
import {GetAlbumsByArtistId} from '../../list/services/GetAlbumsByArtistId';
import MusicAdapter from '../../adapters/MusicAdapter';
import AppleMusicClient from '../../../../infrastructure/AppleMusic/clients/MusicClient';
import HTTPClient from '../../../../infrastructure/http/clients/HTTPClient';
import {async} from '@angular/core/testing';
import {GetTracksFromAlbumById} from './GetTracksFromAlbumById';
import GetAlbumsByArtistIdTransformer from '../../list/transformers/GetAlbumsByArtistIdTransformer';
import GetTracksFromAlbumByIdTransformer from '../transformers/GetTracksFromAlbumByIdTransformer';

describe('GetTracksFromAlbumById tests', () => {
  let getTracksFromAlbumById: ServiceInterface;

  beforeEach(() => {
    getTracksFromAlbumById = new GetTracksFromAlbumById(
      new MusicAdapter(
        new GetTracksFromAlbumByIdTransformer(),
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
