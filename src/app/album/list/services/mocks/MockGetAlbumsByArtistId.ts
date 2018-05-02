import {GetAlbumsByArtistId} from '../GetAlbumsByArtistId';
import Album from '../../../entity/Album';
import Artist from '../../../../Artist/entity/Artist';

export class MockGetAlbumsByArtistId extends GetAlbumsByArtistId {

  handle(id: number, limit?: number): Promise<any> {
    return new Promise ((resolve, reject) => {
      const artist = new Artist(
        1,
        'urlArtist',
        'Victor Ribero',
        'Rock'
      );

      resolve(
        [
          new Album(
            468749,
            'In Between Dreams',
            'https://is1-ssl.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/60x60bb.jpg',
            12,
            'USD',
            artist,
            0,
          ),
        ]
      );
    });
  }
}
