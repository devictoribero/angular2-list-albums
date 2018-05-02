import {async, TestBed} from '@angular/core/testing';
import {GetTracksFromAlbumById} from './GetTracksFromAlbumById';
import MusicService from '../../services/MusicService';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GetTracksFromAlbumById tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: MusicService,
        useClass: GetTracksFromAlbumById
      }],
    });
  });

  it('GIVEN an album id WHEN we fetch data THEN we have the result limited by 2', async(() => {
    const albumID = 909253;
    const numberAlbumsMax = 2;
    const getTracksFromAlbumById = TestBed.get(GetTracksFromAlbumById);

    getTracksFromAlbumById.handle(albumID, numberAlbumsMax).then(res => {
      console.log(res);
      expect(res.totalAlbums).toBe(2);
    });
  }));
});
