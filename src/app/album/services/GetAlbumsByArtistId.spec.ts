import ServiceInterface from '../../common/service/ServiceInterface';
import {GetAlbumsByArtistId} from './GetAlbumsByArtistId';
import MusicAdapter from '../adapters/MusicAdapter';
import AppleMusicClient from '../../../infrastructure/AppleMusic/clients/AppleMusicClient';
import HTTPClient from '../../../infrastructure/http/clients/HTTPClient';
import {async} from '@angular/core/testing';

describe('GetAlbumsByArtistId tests', () => {
  let getAlbumByArtistId: ServiceInterface;

  beforeEach(() => {
    getAlbumByArtistId = new GetAlbumsByArtistId(
      new MusicAdapter(
        new AppleMusicClient(
          new HTTPClient()
        )
      )
    );
  });

  it('GIVEN an artistId and numberOfAlbums WHEN we fetch data THEN we have the result limited by 10', async(() => {
    const artistID = 909253;
    const numberAlbumsMax = 10;
    getAlbumByArtistId.handle(artistID, numberAlbumsMax).then(res => {
      expect(res.resultCount).toBe(11);
    });
  }));


});
