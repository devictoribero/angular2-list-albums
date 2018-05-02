import {GetAlbumsByArtistId} from './GetAlbumsByArtistId';
import {async} from '@angular/core/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import MusicService from '../../services/MusicService';
import { HttpClientModule, HttpClient } from '@angular/common/http';


describe('GetAlbumsByArtistId tests', () => {
  let injector: TestBed;
  let getAlbumsByArtistId: MusicService;
  let httpClient: HttpClientModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    });

    injector = getTestBed();
    httpClient = injector.get(HttpClientModule);
    getAlbumsByArtistId = new GetAlbumsByArtistId(httpClient);
  });

  it('GIVEN an artistId and numberOfAlbums WHEN we fetch data THEN we have the result limited by 10', async(() => {
    const artistID = 909253;
    const numberAlbumsMax = 4;
    const getAlbumByArtistId = TestBed.get(GetAlbumsByArtistId);

    getAlbumByArtistId.handle(artistID, numberAlbumsMax).then(res => {
      console.log(res);
      expect(res.totalAlbums).toBe(4);
    });
  }));

});
