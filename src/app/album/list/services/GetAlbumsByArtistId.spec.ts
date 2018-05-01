import ServiceInterface from '../../../Common/Service/CommonServiceInterface';
import {GetAlbumsByArtistId} from './GetAlbumsByArtistId';
import MusicAdapter from '../../adapters/MusicAdapter';
import AppleMusicClient from '../../../../infrastructure/AppleMusic/clients/MusicClient';
import HTTPClient from '../../../../infrastructure/http/clients/HTTPClient';
import {async} from '@angular/core/testing';
import GetAlbumsByArtistIdTransformer from '../transformers/GetAlbumsByArtistIdTransformer';

describe('GetAlbumsByArtistId tests', () => {
  let getAlbumByArtistId: ServiceInterface;

  beforeEach(() => {
    getAlbumByArtistId = new GetAlbumsByArtistId(
      new MusicAdapter(
        new GetAlbumsByArtistIdTransformer(),
        new AppleMusicClient(
          new HTTPClient()
        )
      )
    );
  });

  it('GIVEN an artistId and numberOfAlbums WHEN we fetch data THEN we have the result limited by 10', async(() => {
    const artistID = 909253;
    const numberAlbumsMax = 4;
    getAlbumByArtistId.handle(artistID, numberAlbumsMax).then(res => {
      expect(res.totalAlbums).toBe(4);
    });
  }));

});
