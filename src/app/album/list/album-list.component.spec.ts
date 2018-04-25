import { AlbumListComponent } from './album-list.component';
import {MockAlbumService} from '../services/mocks/MockAlbumService';

describe('AlbumListComponent unit test', () => {
  let albumList: AlbumListComponent;
  beforeEach(() => {
    albumList = new AlbumListComponent(new MockAlbumService());
  });

  it('shows list of album items by default - unit', () => {
    albumList.ngOnInit();
    expect(albumList.albums.length).toBe(1);
  });
});