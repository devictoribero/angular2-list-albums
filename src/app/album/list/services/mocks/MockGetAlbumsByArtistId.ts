import {GetAlbumsByArtistId} from '../../list/services/GetAlbumsByArtistId';
import Album from '../../entity/Album';

export class MockGetAlbumsByArtistId extends GetAlbumsByArtistId{
  handle(artistId): Promise<any> {
    return new Promise ((resolve, reject) => {
      resolve(
        [
          new Album(
            468749,
            'In Between Dreams',
            'Jack Johnson',
            'https://is1-ssl.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/60x60bb.jpg',
            7.99,
          ),
        ]
      );
    });
  }
}