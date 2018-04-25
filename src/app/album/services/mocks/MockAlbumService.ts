import AlbumService from '../AlbumService';
import Album from '../../entity/Album';

export class MockAlbumService extends AlbumService {
  get(): Array<Album> {
    return [
      new Album(
        1,
        'first mock',
        'Vitor Ribero',
        4,
        'https://is3-ssl.mzstatic.com/image/thumb/Music2/v4/ac/7d/de/ac7dded0-b96c-b4db-d722-f35cef03dcfb/UMG_cvrart_00602537293308_01_RGB72_1500x1500_12UMGIM46900.jpg/1200x630bb.jpg',
      ),
    ];
  }
}